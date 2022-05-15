export class SequenceShortViewModel {
    seqId: number = 0;
    prjId: number = 0;
    prgId: number = 0;
    networkId: number = 0;
    zoneId: number = 0;
    seqStartDate!: Date;
    seqEndDate!: Date;
    basisOfOp: string = "";
    seqType: string = "";
    SeqTagName: string = "";
    networkName: string = "";
    zoneName: string = "";
    seqName: string = "";
    seqMasterStartTime: string = "";
    isValid: boolean = false;
    intervalDays: number = 0;
    weekDays: number[] = [];
}

export class SequenceValveDataViewModel {
    mstseqId: number = 0;
    seqId: number = 0;
    projectId: number = 0;
    prgId: number = 0;
    networkId: number = 0;
    zoneId: number = 0;
    startId: number = 0;
    valveStartTime: string = "";
    seqNo: number = 0;
    timeSpanId: number = 0;
    groupName: string = "";
    valve: string = "";
    channelId: number = 0;
    valveStartDuration: string = "";

    isFertilizerRelated: boolean = false;
    isFlushRelated: boolean = false;

    scheduleNo: number = 0;

}