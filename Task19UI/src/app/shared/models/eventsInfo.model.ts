import { GroupModelDTO } from "./group.model";

export class EventInfoModel {
  visitedGroups: GroupModelDTO[] = [];
  scrobbleRecommendation: GroupModelDTO[] = [];
}
