import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authentificationService: AuthentificationService) {
        super({
            JwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey'
        });
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authentificationService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
