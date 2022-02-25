import { IEvent } from 'app/types/event.interface';
import { GenericService } from './generic.service';

export class EventService extends GenericService<IEvent> {
  constructor() {
    super('/event');
  }
}
