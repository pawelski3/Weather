import { Component, OnInit } from '@angular/core';
import { flipInX } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'star';

  // City: any;
  // location:any;
  // dateCompare: any;
  // Error: any;
  // GeoLat: number;
  // GeoLon: number;
  // UV: any;
  // FormControl=true;

  constructor() { }

  ngOnInit(): void {
    //this.FormControl=true;
    //console.log("init compo app");
    //this.handleSearch();
  }
  enterAnimation: TextAnimation = {
    animation: flipInX,
    delay: 50,
    type: 'letter',
  };
  // handleSearch() {
  //   console.log("handle in app")
  //   this.http.getForecast(this.location).then(data => {
  //     console.log(data);
  //     //this.GeoLat=data.city.coord.lat
  //     this.City = data;
  //     this.Error = false;
  //     this.setVariable(data);
  //     this.http.setVariable(this.location,this.City)
  //     //this.getUv();
  //   }).catch(err => {
  //     this.Error = "Podaj prawidłową nazwę miejscowości";
  //     this.City = false;
  //     console.log(err)
  //   })
  // }

  // setVariable(data) {
  //   this.GeoLat = data.city.coord.lat;
  //   this.GeoLon = data.city.coord.lon;
  //   // data.list.forEach(item=>{
  //   //   console.log("item: ",item.rain)
  //   //   let w=JSON.stringify(item.rain)?JSON.stringify(item.rain):"brak"
  //   //   console.log("key ",w.slice(-5,-1))
  //   //   //console.log("key ",Object.keys(item.rain));
  //   // })
  // }




  getDate(): Date {
    return new Date();
  }

}
