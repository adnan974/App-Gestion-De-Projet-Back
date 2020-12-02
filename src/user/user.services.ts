import { Injectable } from '@nestjs/common';
import { AuthentificationService } from 'src/authentification/authentification.service';
import {getConnection} from "typeorm";
import {Utilisateur} from "../models/utilisateur.entity";
import { UserRepository } from './user.repository';


@Injectable()
export class UserService {
  constructor(
    private authentificationService:AuthentificationService,   
    private userRepository:UserRepository
    )
  {

  }



  async signUp(user:{civilite:object,firstname:string,lastname:string,username:string,email:string,password:string}){
     
     let hashPassword = await this.authentificationService.hashPassword(user.password);
     this.userRepository.create({ civilite:user.civilite,nom:user.lastname,
       prenom:user.firstname,nomUtilisateur:user.username,motDePasse:hashPassword }).save();
  }

  async searchUserByUsername(username:string){
    let anUser;
    anUser = await this.userRepository.findOne({nomUtilisateur:username});
    return anUser;
    
  }

  getAnUserProjects(userId){
    return this.userRepository.getProjectByUserId(userId);
  }

  getAnUserTasks(userId){
    return this.userRepository.getTaskByUserId(userId);

  }


}
