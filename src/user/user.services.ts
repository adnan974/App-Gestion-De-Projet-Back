import { Injectable } from '@nestjs/common';
import { AuthentificationService } from 'src/authentification/authentification.service';
import { UserSignUpDto } from 'src/dto/usersignup.dto';
import { ProjectRepository } from 'src/project/project.repository';
import { AdvancedConsoleLogger, getConnection } from "typeorm";
import { Utilisateur } from "../models/utilisateur.entity";
import { UserRepository } from './user.repository';

const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private projectRepository: ProjectRepository
  ) {

  }

  async signUp(user: UserSignUpDto) {

    let userToCreate = await this.userRepository.create(user)
    let hashPassword = await this.hashPassword(user.motDePasse);
    userToCreate.motDePasse = hashPassword;

    this.userRepository.save(userToCreate);
  }

  async getAllUsers() {
    let users = await this.userRepository.find({ select: ["id", "nom", "prenom", "nomUtilisateur"] })
    return { users }
  }

  async searchUserByUsername(username: string) {
    let anUser = await this.userRepository.findOne({ nomUtilisateur: username });
    return anUser;
  }

  getAnUserProjects(userId) {
    return this.userRepository.getProjectByUserId(userId);
  }

  async getAnUserTasks(userId) {
    let userTasks = await this.userRepository.getTaskByUserId(userId);
    return { tasks: userTasks }

  }

  async addProjectToAnUser(projectId, userId) {

    // Problème rencontré :
    // Ne pas oublier l'option "relation". Sinon UserToUpdate est renvoyé sans son attribut "projet"
    let userToUpdate = await this.userRepository.findOne(userId, { relations: ["projet"] });
    let projectToAssign = await this.projectRepository.findOne(projectId);

    // A FAIRE: cas ou le projet n'existe pas
    // if (!projectToAssign) {
    //   return "projet non trouvé"
    // }

    userToUpdate.projet.push(projectToAssign);
    this.userRepository.save(userToUpdate);
  }

  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  }

  async comparePassword(plainPassword, hash) {
    return await bcrypt.compare(plainPassword, hash)
  }




}
