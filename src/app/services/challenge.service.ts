import { IChallenge } from 'app/types/challenge.interface';
import { GenericService } from './generic.service';

export class ChallengeService extends GenericService<IChallenge> {
  constructor() {
    super('/challenge');
  }
}
