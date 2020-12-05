import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';

// tag : jwt auth
// remarque: cette strategie a pour but de vérifier l'user et le mot de passe en base. (Utile) lors d'un login
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authentificationService: AuthentificationService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authentificationService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}