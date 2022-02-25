export interface ITimelineItem {
  date: Date;
  description: string;
  subTitle: string;
  title: string;
}
export interface ITimeline {
  events: ITimelineItem[];
}
