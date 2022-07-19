export class MultiHandShakeNonReach {
    Id: number = 0;
    FrameType: number =0;
    NodeId: number =0;
    Soy: string ="";
    VerNumber: number =0;
    ConfigVerNumber: number =0;
    ScheduleUpno: number =0;
    SensorUpno: number =0;
    TempReading: number =0;
    BatteryVoltReading: number =0;
    LvsStartTime: number =0;
    LvsDuration: number =0;
    LvsOperation: number =0;
    LvsValveNo: number =0;
    LvsRop: number =0;
    MoUpno: number =0;
    ValveStatus: number =0;
    Distatus: number =0;
    AddedDatetime!: Date;
}


export class MultiUiversion {
    Id: number =0;
    Version: number =0;
    ChangedDatetime!: Date ;
}