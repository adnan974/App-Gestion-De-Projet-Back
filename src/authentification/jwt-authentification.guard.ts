import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// tag : jwt auth
// Cette classe permet définir la classe qui sera utilisée pour le AuthGuard (explication bof)
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') { }