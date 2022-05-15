export interface MultiNodeJoinDataFrame {
    id: number | null;
    TotalBytes: number | null;
    FrameType: number | null;
    NodeId: number | null;
    LastCommTime: number | null;
    DeviceResetCause: number | null;
    Attempt: number | null;
    ProjectId: number | null;
    TechId: number | null;
    NodeNo: number | null;
    Gwno1: number | null;
    Gwno2: number | null;
    Gwno3: number | null;
    Gwno4: number | null;
    Latitude: number | null;
    Longitude: number | null;
    Moy: string | null;
    Seconds: number | null;
    Time: number | null;
    Year: number | null;
    LatLongAccuracy: number | null;
    DeviceSrno: number | null;
    AddedDateTime: Date | string | null;
}