import { EventFormat, EventDays, EventTimes } from "../enums";

export class filter{
    searchString: string = "";
    format: EventFormat;
    days: EventDays;
    times: EventTimes;
    // ... и т.д.
}
