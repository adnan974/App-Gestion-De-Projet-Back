import { IsString } from "class-validator";
import { Civilite } from "src/models/civilite.entity";


export class UserSignUpDto {

    civilite: Civilite

    @IsString()
    nom: string;

    @IsString()
    prenom: string;

    @IsString()
    nomUtilisateur: string;

    @IsString()
    email: string;

    @IsString()
    motDePasse: string;
}