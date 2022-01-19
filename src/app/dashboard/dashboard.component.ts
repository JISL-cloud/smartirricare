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
  @ViewChild('mymap',{ static: false }) streetsideMapViewChild!: ElementRef<HTMLInputElement>;
  public pageTitle: string = "Map";
  get center() {
    return this.service.center$;
  }

  streetsideMap!: Microsoft.Maps.Map;
  position!: Microsoft.Maps.Location;

  log: string[] = [];
  constructor(private bingApiLoader: BingApiLoaderService,private service: SiteConditionsService) {
    this.subtitle = 'MAP VIEW.';
    this.bingApiLoader.load().then(() => {
      console.log('map loaded');
      this.mapLoaded = true;
    });
  }
  ngOnInit(): void {
    // var map =  new Microsoft.Maps.Map(
    //   this.streetsideMapViewChild.nativeElement,
    //   {
    //     // mapTypeId: Microsoft.Maps.MapTypeId.streetside,
    //     // streetsideOptions: {
    //     //   overviewMapMode: Microsoft.Maps.OverviewMapMode.hidden,
    //     // },
    //     credentials:'Ase8Vdle07QaA23Nu5wSREdIhclEsn_Ys2dCQLkBLsDA6KF6teS2YISo7p86LC7h'
    //   }
    // );
        
    // // var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    // //     credentials: 'Bing Map Key - I removed it here'
    // // });
    // var pushpin = new Microsoft.Maps.Pushpin(map.getCenter());
    // var layer = new Microsoft.Maps.Layer();
    //  layer.add(pushpin);
    // map.layers.insert(layer);
  }
  ngOnChanges() {
    this.log.push('OnChanges');
  }

  ngAfterViewInit() {
    this.log.push('AfterViewInit');
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
  
  }

  createStreetSideMap() {
    this.streetsideMap = new Microsoft.Maps.Map(
      this.streetsideMapViewChild.nativeElement,
      {
        // mapTypeId: Microsoft.Maps.MapTypeId.streetside,
        // streetsideOptions: {
        //   overviewMapMode: Microsoft.Maps.OverviewMapMode.hidden,
        //   showExitButton: false
        // },
        credentials:'Ase8Vdle07QaA23Nu5wSREdIhclEsn_Ys2dCQLkBLsDA6KF6teS2YISo7p86LC7h'
      }
    );
  }

  hasLogEntries() {
    return this.log.length > 0;
  }

}
