export interface MultiNodeNwDataFrame {
        id: number;
        TotalBytes: number | null;
        FrameType: number | null;
        NodeId: number | null;
        LastCommTime: number | null;
        RxFrametype: number | null;
        NgcurrentRssi: number | null;
        NgcurrentSnr: number | null;
        NgcurrentSf: number | null;
        Ngfreq: number | null;
        NgcurrentCr: number | null;
        Gwid6b: number | null;
        Ngattempt3b: number | null;
        Power2b: number | null;
        Sfgw2b: number | null;
        GnsnrPrevious3b: number | null;
        GnrssiPrevious3b: number | null;
        ProductType4b: number | null;
        AddedDatetime: Date | string | null;
    }