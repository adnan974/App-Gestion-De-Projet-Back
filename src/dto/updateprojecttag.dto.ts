import { IsInt, isInt, IsNotEmpty, IsString } from "class-validator";


export class UpdateProjectTagDTO {

    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    libelle: string;


    couleurFond: string;

}