import { Vrtsetting } from "../configuration/sensors/sensors.model";

export class MultiNodeLatLong {
    Id: number = 0;
    NetworkNo: number =0;
    NodeId: number =0;
    Latitude: number =0;
    Longitude: number =0;
}


export class MultiNodeDashbordData {
    NetworkNo: number = 0;
    NodeId: number = 0;
    NodeNo: number = 0;
    Latitude: number = 0;        
    Longitude: number = 0;
    VrtList: Vrtsetting[] = [];
    SensorList: SensorListModel[]=[];
}


export class SensorListModel {
    Id: number = 0;
    ProductType: number = 0;
    GwSrn: number = 0;
    NodePorductId: number = 0;
    TagName: string = "";
    NodeId: number = 0;
    SsNo: number = 0;
}