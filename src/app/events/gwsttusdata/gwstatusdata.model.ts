export interface GwstatusData {
    Id: number;
    TotalBytes: number | null;
    FrameType: number | null;
    NodeId: number | null;
    CtimeSoy: number | null;
    ActiveSec: number | null;
    Gwvbat: number | null;
    Gwtemp: number | null;
    Spvvolt: number | null;
    GwchargeS: number | null;
    GsmSig: number | null;
    ConnectedCards: number | null;
    Rfsig: number | null;
    Rfnwledstate: number | null;
    C1actmin: number | null;
    C2actmin: number | null;
    C3actmin: number | null;
    AddedDateTime: Date | string;
}