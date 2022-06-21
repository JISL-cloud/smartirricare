import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { BingApiLoaderService } from './bing-api-loader.service';
import { SiteConditionsService } from './site-conditions.service';

//https://stackblitz.com/edit/angular-bing-maps-9j9cze?file=src%2Fapp%2Fapp.component.html
//https://www.npmjs.com/package/bingmaps
@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  mapLoaded = false;
  pins: any[] = []
  @ViewChild('mymap', { static: false }) streetsideMapViewChild!: ElementRef<HTMLInputElement>;
  public pageTitle: string = "Map";
  get center() {
    return this.service.center$;
  }

  streetsideMap!: Microsoft.Maps.Map;
  position!: Microsoft.Maps.Location;
  Events = Microsoft.Maps.Events;
  Location = Microsoft.Maps.Location;
  Pushpin = Microsoft.Maps.Pushpin;
  log: string[] = [];
  constructor(private bingApiLoader: BingApiLoaderService, private service: SiteConditionsService) {
    this.subtitle = 'MAP VIEW.';
    this.bingApiLoader.load().then(() => {
      console.log('map loaded');
      this.mapLoaded = true;
    });
  }
  ngOnInit(): void {
    //this.createStreetSideMap()

    // var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    //     credentials: 'Bing Map Key - I removed it here'
    // });
    // var pushpin = new Microsoft.Maps.Pushpin(map.getCenter());
    // var layer = new Microsoft.Maps.Layer();
    //  layer.add(pushpin);
    // map.layers.insert(layer);
  }
  ngOnChanges() {
    this.log.push('OnChanges');
  }

  ngAfterViewInit() {
    // this.log.push('AfterViewInit');
    this.createStreetSideMap();
    this.service.center$.pipe(
      filter(coords => !!coords),
      take(1)
    ).subscribe(coords => {
      const [lat, lon] = coords;
      this.log.push(`Got coords from service: ${coords}`);
      const position = new Microsoft.Maps.Location(lat, lon);
      this.streetsideMap.setView({ center: position });
      this.log.push(`current Center: ${this.streetsideMap.getCenter()}`);
    });
    this.getPushPIn()
    this.getPolygon()
  }

  createStreetSideMap() {
    this.streetsideMap = new Microsoft.Maps.Map(
      this.streetsideMapViewChild.nativeElement,
      {
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        labelOverlay: Microsoft.Maps.LabelOverlay.hidden,
        streetsideOptions: {
          overviewMapMode: Microsoft.Maps.OverviewMapMode.hidden,
         
          showExitButton: false
        },
        credentials: 'Ase8Vdle07QaA23Nu5wSREdIhclEsn_Ys2dCQLkBLsDA6KF6teS2YISo7p86LC7h'
      }
    );
  }
  getPolygon() {
    var polygon = new Microsoft.Maps.Polygon([
      new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude - 0.05, this.streetsideMap.getCenter().longitude - 0.05),
      new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude + 0.01, this.streetsideMap.getCenter().longitude - 0.05),
      new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude + 0.01, this.streetsideMap.getCenter().longitude + 0.05)],
    );

    var polygon1 = new Microsoft.Maps.Polygon([
      new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude + 0.10, this.streetsideMap.getCenter().longitude - 0.08),
      new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude + 0.06, this.streetsideMap.getCenter().longitude - 0.08),
      new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude + 0.06, this.streetsideMap.getCenter().longitude + 0.08)],
    );
    this.streetsideMap.entities.push(polygon);
    this.streetsideMap.entities.push(polygon1);
  }
  getPushPIn() {
    // this.pins = [
    //   new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude, this.streetsideMap.getCenter().longitude), { color: '#f00' }),
    //   new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude, this.streetsideMap.getCenter().longitude - 0.1), { color: '#0f0', draggable: true }),
    //   new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude, this.streetsideMap.getCenter().longitude + 0.1), { color: '#00f', draggable: true }),
    // ];
    this.pins.push(new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude, this.streetsideMap.getCenter().longitude - 0.2), { color: '#f00', draggable: true, title: "N1R1V2" }))
    this.pins.push(new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude, this.streetsideMap.getCenter().longitude + 0.3), { icon: "https://www.bingmapsportal.com/Content/images/poi_custom.png" }))
    this.pins.push(new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude, this.streetsideMap.getCenter().longitude - 0.1), { color: '#0f0', draggable: true, text: 'V', title: "N1R1V1" }))
    Microsoft.Maps.Events.addHandler(this.pins[0], 'click', () => { this.highlight('pushpinClick'); });
    Microsoft.Maps.Events.addHandler(this.pins[1], 'click', () => { this.highlight('pushpinClick'); });
    this.streetsideMap.entities.push(this.pins);
    Microsoft.Maps.Events.addHandler(this.streetsideMap, 'click', (e) => { this.handleArgs('mapClick', e); });
    //Microsoft.Maps.Events.addHandler(pins, 'click', this.clickEvent());

    // var pushpin = new Microsoft.Maps.Pushpin(this.streetsideMap.getCenter(), { color: 'red' });
    //this.streetsideMap.entities.push(pushpin);

    // Binding the events
    // Microsoft.Maps.Events.addHandler(pushpin, 'click', () => { highlight('pushpinClick'); });
  }
  highlight(str: string) {
    alert(str)
  }

  handleArgs(id: string, e: any) {
    alert("Clicked");
    this.pins.push(new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(this.streetsideMap.getCenter().latitude, this.streetsideMap.getCenter().longitude), { color: '#f00' }))
    this.streetsideMap.entities.push(this.pins);
  }
  hasLogEntries() {
    return this.log.length > 0;
  }

}
