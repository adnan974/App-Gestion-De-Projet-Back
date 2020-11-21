import { Controller, Get ,Post, Body} from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
//import { UserService } from './user.services';

@Controller("signin")
export class UserController {
  constructor(private readonly authentificatonService: AuthentificationService) {}

 

  @Post()
  signIn(){
      
  }
   
}
