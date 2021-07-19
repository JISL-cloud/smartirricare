export class Project {
    public prjId: number = 0;
    public prjTypeId: number = 0;
    public name: string = "";
    public description: string = "";
    public address: string = "";
    public noOfTotalOpsubscribed: number = 0;
    public cntryId: number = 0;
    public timeZone: string = "";
    public maxPermissibleTotalFlowRate: number = 0;
    public unitsId: number = 0;
    public noOfTotalZones: number = 0;
    public noOfTotalNetwork: number = 0;
    public timeZoneOffsetMinutes: number = 0;
    public maxNoOfRtuperNetwork: number = 0;
    public noOfTotalBlocks: number = 0;
    public offset: string = "";
}

export class Network {
    public networkId: number = 0;
    public prjId: number = 0;
    public bstid1: number = 0;
    public description: string = "";
    public bstid2: number = 0;
    public noOfZones: number = 0;
    public noOfRTU: number = 0;
    public name: string = "";
    public networkNo: number = 0;
    public useTemplateForRTU: boolean = false;
    public tagName: string = "";
    public networkLock: boolean = false;

}

export class NetworkDDL {
    public displayText: string = "";
    public value: number = 0;
}

export class NodeModel {
    public id: number = 0
    public nodeNo: number = 0
    public nodeName: string = "";
    public networkId: number = 0
    public networkNo: number = 0
    public rtuId: number = 0
    public description: string = "";
    public productTypeId: number = 0
    public productName:string=""
    public isAddonCard:boolean = false

}

export class ProductTypes {
    public id: number = 0
    public type: string = "";
    public productNo: number = 0
    public noOfValves: number = 0
    public noOfSs: number = 0
}