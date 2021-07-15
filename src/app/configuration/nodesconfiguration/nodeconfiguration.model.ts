export class NonRechableNode {
    public id: number = 0;
    public thresholdforOcsc: number = 0;
    public minConnInterval: number = 0;
    public minAdvInterval: number = 0;
    public maxAdvInterval: number = 0;
    public mtusizeValue: number = 0;
    public handshkInterval: number = 0;
    public pulsedelayvalue: number = 0;
    public operAttempt: number = 0;
    public attemptForWaterFlow: number = 0;
    public longSleepHndshkIntervalMf: number = 0;
    public bttxpower: number = 0;
    public fixLoraSf: number = 0;
    public fixLoraPower: number = 0;
    public fixLoraFreq: number = 0;
    public fixLoraCr: number = 0;
    public preferredGw1id: number = 0;
    public preferredGw2id: number = 0;
    public preferredGw3id: number = 0;
    public preferredGw4id: number = 0;
    public awfdetectEndis: number = 0;
    public fixLoraSetting: number = 0;
    public autoSendStatusEnableBit: number = 0;
    public powerLoopLatchEnable: number = 0;
    public globalAlarmEnDs: number = 0;
    public maxLoRaCommAtt: number = 0;
    public sensorAlarmEndis: number = 0;
    public loRaRxWindowMasking: number = 0;
    public dummyByte3Lsb: number = 0;
    public dummyByte3Msb: number = 0;
    public saftetyTimeoutMin: number = 0;
    public slowDownCommDurMin: number = 0;
    public forceDeepSleepDurMin: number = 0;
    public nodeId: number = 0;
}

export class RechableNode {
    public id: number = 0;
    public thresholdforOcsc: number = 0;
    public minConnInterval: number = 0;
    public minAdvInterval: number = 0;
    public maxAdvInterval: number = 0;
    public mtusizeValue: number = 0;
    public handshkInterval: number = 0;
    public pulsedelayvalue: number = 0;
    public operAttempt: number = 0;
    public attemptForWaterFlow: number = 0;
    public longSleepHndshkIntervalMf: number = 0;
    public bttxpower: number = 0;
    public fixLoraSf: number = 0;
    public fixLoraPower: number = 0;
    public fixLoraFreq: number = 0;
    public fixLoraCr: number = 0;
    public preferredGw1id: number = 0;
    public preferredGw2id: number = 0;
    public preferredGw3id: number = 0;
    public preferredGw4id: number = 0;
    public awfdetectEndis: number = 0;
    public fixLoraSetting: number = 0;
    public autoSendStatusEnableBit: number = 0;
    public powerLoopLatchEnable: number = 0;
    public globalAlarmEnDs: number = 0;
    public maxLoRaCommAtt: number = 0;
    public sensorAlarmEndis: number = 0;
    public loRaRxWindowMasking: number = 0;
    public dummyByte3Lsb: number = 0;
    public dummyByte3Msb: number = 0;
    public saftetyTimeoutMin: number = 0;
    public slowDownCommDurMin: number = 0;
    public forceDeepSleepDurMin: number = 0;
    public AutoSensorStatusSendInterval: number = 0;
    public SamplingTimeInterval: number = 0;
    public ApplicationEnbits: number = 0;
    public TimeForNocommWithGw: number = 0;
    public nodeId: number = 0;
}



export class GatewayNode {
    id: number = 0;
    operator1MobNo: number = 0
    operator2MobNo: number = 0
    operator3MobNo: number = 0
    operator4MobNo: number = 0
    operator5MobNo: number = 0
    tempSensorHighTh: number = 0
    tempSensorLowTh: number = 0
    vbatlowThvoltage: number = 0
    alarmInterval: number = 0
    fuaskInterval: number = 0
    maxiocurrent: number = 0
    logAutoTxEndis: boolean = false;
    debug: boolean = false;
    warning: boolean = false;
    error: boolean = false;
    info: boolean = false;
    direction: number = 0
    statusStoreDuration: number = 0
    gsmportEn: boolean = false;
    schtransferedEnableDis: boolean = false;
    forceAlarmDisable: boolean = false;
    comdelay: number = 0
    loRaConcentratorEn: boolean = false;
    settingRfport: number = 0
    nodeId: number = 0
}