import { GroupModelDTO } from "./group.models";

export class EventInfoModel {
  visitedGroups: GroupModelDTO[] = [];
  scrobbleRecommendation: GroupModelDTO[] = [];
}
