import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './const';
// tag : jwt auth
// remarque: cette strategie a pour but de vérifier la validité d'un token
//           La validité se fait au niveau du constructeur
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            // remarque: il me semble que cette partie permettra d'analyser le token d'une requete d'un route avec
            // un useGuard lié à cette classe
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            // Cette infos donne la clé pour déchiffrer le token entrant
            secretOrKey: jwtConstants.secret,
        });
    }

    // Remarque : cette fonction est toujours éxécutée. Elle renvoie, les informations
    //            du user qui sont dans le token
    async validate(payload: any) {
        console.log(payload)
        return { id: payload.id, username: payload.username };
    }
}