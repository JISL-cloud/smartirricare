export class Vrtsetting {
    id: number = 0;
    NodeId: number = 0;
    UpId: number = 0;
    ProductType: number = 0;
    ValveNo: number = 0;
    ValveType: number = 0;
    MasterNodeId: number = 0;
    MasterValveNo: number = 0;
    BlockNo: number = 0;
    FertGrpNo: number = 0;
    FilterGrpNo: number = 0;
    LinkedSensor1NodeId: number = 0;
    LinkedSensor1SensorNo: number = 0;
    LinkedSensor2NodeId: number = 0;
    LinkedSensor2SensorNo: number = 0;
    ValveGrpNo1: number = 0;
    ValveGrpNo2: number = 0;
    HeadPumpGrNo: number = 0;
    GwSrn: number = 0;
    TagNameValve: string="";
    TagNameMasterValve: string="";
    TagNameBlock: string="";
    TagNameFertGroup: string="";
    TagNameFilterGroup: string="";
    TagNameValveGroup: string="";
    TagNamePumpGroup: string="";
    TagNameMasterNode:string=""
}

export class Analog420mAsensor {
    id: number = 0;
    GwSrn: number = 0;  
    NodeId: number = 0;
    ProductType: number = 0;
    SsNo: number = 0;
    SsType: number = 0;
    CtrHghThrs: number = 0;
    HghThrs: number = 0;
    LwTthrs: number = 0;
    CrtLwrThrs: number = 0;
    DlyCfmThrs: number = 0;
    Rsved: number = 0;
    Sspriority: number = 0;
    SamplingRate: number = 0;
    TagName:string = ""
    
}

export class Analog05vsensor {
    id: number = 0;
    GwSrn: number = 0;  
    NodeId: number = 0;
    ProductType: number = 0;
    SsNo: number = 0;
    SsType: number = 0;
    CtrHghThrs: number = 0;
    HghThrs: number = 0;
    LwTthrs: number = 0;
    CrtLwrThrs: number = 0;
    DlyCfmThrs: number = 0;
    Rsved: number = 0;
    Sspriority: number = 0;
    SamplingRate: number = 0;
    TagName:string = ""
   
}

export class DigitalNoNctypeSensor {
    id: number = 0;
    GwSrn: number = 0;  
    NodeId: number = 0;
    ProductType: number = 0;
    SsNo: number = 0;
    SsType: number = 0;
    DfltStat: number = 0;
    StatRevDly: number = 0;
    AlrmLvl: number = 0;
    DlyTmeIfRevr: number = 0;
    DlyCfmThrs: number = 0;
    Rsved: number = 0;    
    Sspriority: number = 0;
    SamplingRate: number = 0;
    TagName:string = ""
    
}

export class DigitalCounterTypeSensor {
    id: number = 0;
    GwSrn: number = 0;  
    NodeId: number = 0;
    ProductType: number = 0;
    SsNo: number = 0;
    SsType: number = 0;
    HghFlwRtFrq: number = 0;
    LowFlwRtFrq: number = 0;
    FilTmIniWtTm: number = 0;
    PlsDivFct: number = 0;
    DlyCfmThrs: number = 0;
    Rsved: number = 0;   
    Sspriority: number = 0;
    SamplingRate: number = 0;
    TagName:string = ""
}

export class WaterMeterSensorSetting {
    id: number = 0;
    GwSrn: number = 0;  
    NodeId: number = 0;
    ProductType: number = 0;
    SsNo: number = 0;
    SsType: number = 0;
    HghFlwRtFrq: number = 0;
    LowFlwRtFrq: number = 0;
    TmeCfrmNoFlwSec: number = 0;
    DlyCfmThrs: number = 0;
    Rsved: number = 0;
    Sspriority: number = 0;
    SamplingRate: number = 0;
    TagName:string = ""
}