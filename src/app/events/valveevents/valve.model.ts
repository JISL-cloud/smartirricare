export class MultiValveEvent {

    id: number = 0;
    totalBytes: number = 0;
    frameType: number = 0;
    nodeId: number = 0;
    updataeTimeSow: number = 0;
    valveNo: number = 0;
    valveType: number = 0;
    requiredState: number = 0;
    currentState: number = 0;
    currentStateReason: number = 0;
    operationTimeMoy: number = 0;
    activeCurrent: number = 0;
}

export interface MultiValveAlarmData {
    Id: number;
    ValveNo: number | null;
    ValveType: number | null;
    ReqState: number | null;
    ReqStateReason: number | null;
    CurrentState: number | null;
    CstateReason: number | null;
    AlarmReason: number | null;
    UpdateTime: number | null;
    AcvcurrentConsimption: number | null;
    AddedDateTime: Date | string | null;
    FrameType: number | null;
    NodeId: number | null;
    Soy: string;
    AlarmType: number | null;
}

export interface MultiSensorAlarmData {
    Id: number;
    FrameType: number | null;
    NodeId: number | null;
    Soy: string;
    AlarmType: number | null;
    SensorNo: number | null;
    SensorType: number | null;
    AlarmReason: number | null;
    SensorValue: number | null;
    Cstate: number | null;
    DefaultState: number | null;
    CummulativeCount: number | null;
    Frequency: number | null;
    Reserved: number | null;
    UcaLdata: string;
    AddedDateTime: Date | string | null;
}

export interface MultiSensorEvent {
    id: number;
    totalBytes: number | null;
    frameType: number | null;
    NodeId: number | null;
    Ssno: number | null;
    Sstype: number | null;
    Sspriority: number | null;
    Samprate: number | null;
    LastAtmSoy: string;
    Utsoy: string;
    StoreSoy: string;
    AlarmReason: number | null;
    SensorValue: number | null;
    Cstate: number | null;
    DefaultState: number | null;
    cummulativeCount: number | null;
    frequency: number | null;
    reserved: number | null;
    ucaLdata: string;
    addedDateTime: Date | string | null;
}


export interface MultiValveAlarmReason {
    Id: number;
    Reason: string;
    AlarmId: number;
}

export interface MultiSensorAlarmReason {
    Id: number;
    Description: string;
    Value: number | null;
}

export interface MultiFrameTypes {
    Id: number;
    AppId: string;
    AppIdValue: number | null;
    RtosFrameType: string;
    RtosValue: number | null;
}

export interface MultiValveReason {
    Id: number;
    Reason: string;
    Value: number | null;
    Priorities: number | null;
}

export interface MultiValveState {
    Id: number;
    State: string;
    Value: number | null;
}

export interface MultiSensorType {
    Id: number;
    AorD: string;
    SensorDescription: string;
    Sstype: number | null;
}

export interface MultiSensorAlarmReason {
    Id: number;
    Description: string;
    Value: number | null;
}

export interface MultiValveType {
    Id: number;
    ValveType: string;
}