import { Civilite } from "src/models/civilite.entity";


export class UserSignUpDto {
    civilite: Civilite
    nom: string;
    prenom: string;
    nomUtilisateur: string;
    email: string;
    motDePasse: string;
}