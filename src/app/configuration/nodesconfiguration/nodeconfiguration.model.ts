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
    cardSetting: CardSetting[] = [];
}


export class CardType {
    id: number = 0;
    cardType1: string = "";
    cardNo: number = 0;
    description: string = "";
}

export class ProjectConfiguration {
    id: number = 0;
    maxNodeSerialNo: number = 0;
    maxNodeId: number = 0;
    maxGwValves: number = 0;
    maxGwSensors: number = 0;
    maxNodeValves: number = 0;
    maxNodeSensors: number = 0;
    maxMobileNoSize: number = 0;
    maxSequences: number = 0;
    maxElementsInSequences: number = 0;
    maxFilters: number = 0;
    maxPumps: number = 0;
    maxFert: number = 0;
    maxRtuscheduleTransferDis: number = 0;
    maxSchOperatedGw: number = 0;
    maxGwinProject: number = 0;
    maxNodePerGw: number = 0;
    maxNodeInProject: number = 0;
}

export class CardSetting {
    id: number = 0;
    cardNo: number = 0;
    cardType: number = 0;
    UucDebug: number = 0;
    ucWarning: number = 0;
    ucError: number = 0;
    ucInfo: number = 0;
    sleepEnDis: number = 0;
    autoSendStatusEnDis: number = 0;
    prediocInvervalSec: number = 0;
    logIntervalSec: number = 0;
    cardFuVersionNo: number = 0;
    safetyTimeoutValves: number = 0;
    reserved: number = 0;
    fnominalOperatioCurrent: number = 0;
    pulseDurationMs: number = 0;
    pulseVoltage: number = 0;
    typeSeleniodLatch: number = 0;
    smts1address: number = 0;
    smts1level: number = 0;
    smts2address: number = 0;
    smts2level: number = 0;
    productId: number = 0;
    nodeId: number = 0;
    cardTypeName:string = ""
}


