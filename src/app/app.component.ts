import { Component, OnInit } from '@angular/core';
import { GetSwapiService } from 'src/app/services/get-swapi.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'star';

  City: any;
  location="Wrocław";
  dateCompare: any;
  Error: any;
  GeoLat: number;
  GeoLon: number;
  UV: any;

  constructor(private http: GetSwapiService) { }

  ngOnInit(): void {
    console.log("init compo app");
    this.handleSearch();
  }

  handleSearch() {
    console.log("handle in app")
    this.http.getForecast(this.location).then(data => {
      console.log(data);
      //this.GeoLat=data.city.coord.lat
      this.City = data;
      this.Error = false;
      this.setVariable(data);
      //this.getUv();
    }).catch(err => {
      this.Error = "Podaj prawidłową nazwę miejscowości";
      this.City = false;
      console.log(err)
    })
  }

  setVariable(data) {
    this.GeoLat = data.city.coord.lat;
    this.GeoLon = data.city.coord.lon;
    // data.list.forEach(item=>{
    //   console.log("item: ",item.rain)
    //   let w=JSON.stringify(item.rain)?JSON.stringify(item.rain):"brak"
    //   console.log("key ",w.slice(-5,-1))
    //   //console.log("key ",Object.keys(item.rain));
    // })
  }




  getDate(): Date {
    return new Date();
  }

}
