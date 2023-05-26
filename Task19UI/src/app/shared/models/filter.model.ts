import { EventFormat, EventDays, EventTimes } from "../enums";

export class FilterModel{
    search: string = "";
    direction: string = "";
    format: EventFormat;
    day: EventDays;
    time: EventTimes;
    // ... и т.д.
}
