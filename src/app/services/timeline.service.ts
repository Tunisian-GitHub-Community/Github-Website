import { ITimeline } from 'app/types/timeline.interface';
import { GenericService } from './generic.service';

export class TimelineService extends GenericService<ITimeline> {
  constructor() {
    super('/timeline');
  }
}
