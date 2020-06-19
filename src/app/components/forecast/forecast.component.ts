import { Component, OnInit, Input } from '@angular/core';
import { GetApiService } from 'src/app/services/get-api.service';
import { flipInX } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'app-films',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class FilmsComponent implements OnInit {

  //@Input()
  City: any;
  location: any;
  dateCompare: any;
  Error: any;
  GeoLat: number;
  GeoLon: number;
  UV: any;

  enterAnimation: TextAnimation = {
    animation: flipInX,
    delay: 50,
    type: 'letter',
  };

  constructor(private http: GetApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    if (this.http.getWeatherData()) {
      this.City = this.http.getWeatherData()
      this.Error = false;
      this.setVariable(this.City);
      this.getUv();
    }
  }

  setVariable(data) {
    this.GeoLat = data.city.coord.lat;
    this.GeoLon = data.city.coord.lon;

  }

  calculate(k) {
    let tempString = (k - 272.15).toString();
    return tempString.slice(0, 5);
  }

  DateChange(date) {
    let day = date.slice(0, 10);
    if (day != this.dateCompare) { this.dateCompare = day; return date.slice(0, 16) }
    else { return date.slice(-9, -3); }
  }

  getUv() {
    this.http.getUV().then(data => {
    }).catch(err => {
      //console.log(err)
    })
  }

  getRain(obj) {
    let rain = JSON.stringify(obj)
    rain = rain.slice(-5, -1)
    return rain.startsWith(":") ? rain.slice(-3) : rain;
  }



}


