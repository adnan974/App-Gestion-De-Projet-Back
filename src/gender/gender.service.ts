import { Injectable } from '@nestjs/common';
import { GenderRepository } from './gender.repository';

@Injectable()
export class GenderService {
    constructor(private genderRepository: GenderRepository) { }

    async getAllGenders() {
        let genders = await this.genderRepository.find();
        return { genders: genders }
    }
}
