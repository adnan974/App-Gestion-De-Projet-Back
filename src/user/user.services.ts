import { Injectable } from '@nestjs/common';
import { AuthentificationService } from 'src/authentification/authentification.service';
import { ProjectRepository } from 'src/project/project.repository';
import { AdvancedConsoleLogger, getConnection } from "typeorm";
import { Utilisateur } from "../models/utilisateur.entity";
import { UserRepository } from './user.repository';


@Injectable()
export class UserService {
  constructor(
    private authentificationService: AuthentificationService,
    private userRepository: UserRepository,
    private projectRepository: ProjectRepository
  ) {

  }



  async signUp(user: { civilite: object, firstname: string, lastname: string, username: string, email: string, password: string }) {

    let hashPassword = await this.authentificationService.hashPassword(user.password);
    this.userRepository.create({
      civilite: user.civilite, nom: user.lastname,
      prenom: user.firstname, nomUtilisateur: user.username, motDePasse: hashPassword
    }).save();
  }

  async searchUserByUsername(username: string) {
    let anUser;
    anUser = await this.userRepository.findOne({ nomUtilisateur: username });
    return anUser;

  }

  getAnUserProjects(userId) {
    return this.userRepository.getProjectByUserId(userId);
  }

  getAnUserTasks(userId) {
    return this.userRepository.getTaskByUserId(userId);

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


}
