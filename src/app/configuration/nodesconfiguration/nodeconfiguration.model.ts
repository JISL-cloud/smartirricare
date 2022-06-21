export class NonRechableNode {
    public Id: number = 0;
    public ThresholdforOcsc: number = 0;
    public MinConnInterval: number = 0;
    public MaxConnInterval: number = 0;    
    public MinAdvInterval: number = 0;
    public MaxAdvInterval: number = 0;
    public MtusizeValue: number = 0;
    public HandshkInterval: number = 0;
    public Pulsedelayvalue: number = 0;
    public PperAttempt: number = 0;
    public AttemptForWaterFlow: number = 0;
    public LongSleepHndshkIntervalMf: number = 0;
    public Bttxpower: number = 0;
    public FixLoraSf: number = 0;
    public FixLoraPower: number = 0;
    public FixLoraFreq: number = 0;
    public FixLoraCr: number = 0;
    public PreferredGw1id: number = 0;
    public PreferredGw2id: number = 0;
    public PreferredGw3id: number = 0;
    public PreferredGw4id: number = 0;
    public AwfdetectEndis: number = 0;
    public FixLoraSetting: number = 0;
    public AutoSendStatusEnableBit: number = 0;
    public PowerLoopLatchEnable: number = 0;
    public GlobalAlarmEnDs: number = 0;
    public MaxLoRaCommAtt: number = 0;
    public SensorAlarmEndis: number = 0;
    public LoRaRxWindowMasking: number = 0;
    public DummyByte3Lsb: number = 0;
    public DummyByte3Msb: number = 0;
    public SaftetyTimeoutMin: number = 0;
    public SlowDownCommDurMin: number = 0;
    public ForceDeepSleepDurMin: number = 0;
    public NodeId: number = 0;
    public GwSrn: number = 0;
    public ProductId: number = 0;
    TagName: string ="";
    NetworkTagName: string="";
    NodeTagName: string="";

    
}
export class MultiAddonCardTypes {
    Id: number =0;
    CardName: string ="";
    CardType: number=0;
}
export class RechableNode {
    public Id: number = 0;
    public ThresholdforOcsc: number = 0;
    public MinConnInterval: number = 0;
    public MaxConnInterval: number = 0;    
    public MinAdvInterval: number = 0;
    public MaxAdvInterval: number = 0;
    public MtusizeValue: number = 0;
    public HandshkInterval: number = 0;
    public Pulsedelayvalue: number = 0;
    public OperAttempt: number = 0;
    public AttemptForWaterFlow: number = 0;
    public LongSleepHndshkIntervalMf: number = 0;
    public Bttxpower: number = 0;
    public FixLoraSf: number = 0;
    public FixLoraPower: number = 0;
    public FixLoraFreq: number = 0;
    public FixLoraCr: number = 0;
    public PreferredGw1id: number = 0;
    public PreferredGw2id: number = 0;
    public PreferredGw3id: number = 0;
    public PreferredGw4id: number = 0;
    public AwfdetectEndis: number = 0;
    public FixLoraSetting: number = 0;
    public AutoSendStatusEnableBit: number = 0;
    public PowerLoopLatchEnable: number = 0;
    public GlobalAlarmEnDs: number = 0;
    public MaxLoRaCommAtt: number = 0;
    public SensorAlarmEndis: number = 0;
    public LoRaRxWindowMasking: number = 0;
    public DummyByte3Lsb: number = 0;
    public DummyByte3Msb: number = 0;
    public SaftetyTimeoutMin: number = 0;
    public SlowDownCommDurMin: number = 0;
    public ForceDeepSleepDurMin: number = 0;
    public AutoSensorStatusSendInterval: number = 0;
    public SamplingTimeInterval: number = 0;
    public ApplicationEnbits: number = 0;
    public TimeForNocommWithGw: number = 0;
    public NodeId: number = 0;
    public GwSrn: number = 0;
    public ProductId: number = 0;
    TagName: string ="";
    NetworkTagName: string="";
    NodeTagName: string="";
}

export class Gateway {
    Id: number=0;
    GatewayNo: number=0;
    SerialNo: number=0;
    Latitude: number=0;
    Longitude: number=0;
    isEdit:boolean = false;
}

export class GatewayNode {
    id: number = 0;
    Operator1MobNo: number = 0
    Operator2MobNo: number = 0
    Operator3MobNo: number = 0
    Operator4MobNo: number = 0
    Operator5MobNo: number = 0
    TempSensorHighTh: number = 0
    TempSensorLowTh: number = 0
    VbatlowThvoltage: number = 0
    AlarmInterval: number = 0
    FuaskInterval: number = 0
    Maxiocurrent: number = 0
    LogAutoTxEndis: boolean = false;
    Debug: boolean = false;
    Warning: boolean = false;
    Error: boolean = false;
    Info: boolean = false;
    Direction: number = 0
    StatusStoreDuration: number = 0
    GsmportEn: boolean = false;
    SchtransferedEnableDis: boolean = false;
    ForceAlarmDisable: boolean = false;
    Comdelay: number = 0
    LoRaConcentratorEn: boolean = false;
    SettingRfport: number = 0
    NodeId: number = 0
    CardSetting: CardSetting[] = [];
    GwSrn: number = 0;
    ProductId: number = 0;
    CardNo1: number =0;   
    C1Type: number =0;  
    C1Debug: number =0;  
    C1Warning: number =0;    
    C1Error: number =0;    
    C1Info: number =0;   
    C1SleepEn: number =0;  
    C1AuoStatusEn: number =0;
    C1AutoStatusInt: number =0;
    C1LogIntSec: number =0;
    C1FirmareVer: number =0;
    C1SafteyTimeoutMin: number =0;
    C1Settings: number =0;
    CardNo2: number =0;
    C2Type: number =0;
    C2Debug: number =0;
    C2Warning: number =0;
    C2Error: number =0;
    C2Info: number =0;
    C2SleepEn: number =0;
    C2AuoStatusEn: number =0;
    C2AutoStatusInt: number =0;
    C2LogIntSec: number =0;
    C2FirmareVer: number =0;
    C2SafteyTimeoutMin: number =0;
    C2Settings: number =0;
    CardNo3: number =0;
    C3Type: number =0;
    C3Debug: number =0;
    C3Warning: number =0;
    C3Error: number =0;
    C3Info: number =0;
    C3SleepEn: number =0;
    C3AuoStatusEn: number =0;
    C3AutoStatusInt: number =0;
    C3LogIntSec: number =0;
    C3FirmareVer: number =0;
    C3SafteyTimeoutMin: number =0;
    C3Settings: number =0;
    ProgramEndDayMode: number =0;
    TagName: string ="";
    NetworkTagName: string="";
    NodeTagName: string="";
}


export class CardType {
    id: number = 0;
    cardType1: string = "";
    cardNo: number = 0;
    description: string = "";
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


