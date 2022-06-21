export class PostEvents {
    startdate: string = ""
    endDate: string = ""
    fromTime: string = "00:00"
    toTime: string = "00:00"
    startDateTime: string = ""
    endDateTime: string = ""
}

export class PostEventsDatalogger {
    gwidNo: number = 0;
    startdate: string = ""
    endDate: string = ""
    fromTime: string = "00:00"
    toTime: string = "00:00"
    startDateTime: string = ""
    endDateTime: string = ""
}

export class MultiNodeAlarm {
    id: number = 0;
    frameType: number = 0;
    nodeId: number = 0;
    soy: string = "";
    alarmType: number = 0;
    addedDateTime!: Date
    gwsoy: number = 0;
}