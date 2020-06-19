import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/services/get-api.service';
import { flipInX } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  City: any;
  location: any;
  dateCompare: any;
  Error: any;
  GeoLat: number;
  GeoLon: number;
  UV: any;
  Sunrise: any;
  Sunset: any;
  isDay: any;

  enterAnimation: TextAnimation = {
    animation: flipInX,
    delay: 50,
    type: 'letter',
  };

  constructor(private http: GetApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  handleSearch() {
    this.http.getForecast(this.location).then(data => {
      this.City = data;
      this.Error = false;
      this.setVariable(data);
      this.http.setVariable(this.City)
    }).catch(err => {
      this.Error = "Podaj prawidłową nazwę miejscowości";
      this.City = false;
    })
  }

  setVariable(data) {
    this.GeoLat = data.city.coord.lat;
    this.GeoLon = data.city.coord.lon;
    this.Sunrise = new Date(data.city.sunrise * 1000);
    this.Sunset = new Date(data.city.sunset * 1000);
    let now = new Date();
    if ((now.getTime() > this.Sunrise.getTime()) && (now.getTime() < this.Sunset.getTime())) { this.isDay = true; } else { this.isDay = false; }

  }

  getData() {
    if (this.http.getWeatherData()) {
      this.City = this.http.getWeatherData()
      this.Error = false;
      this.setVariable(this.City);
    }
  }

  calculate(k) {
    let tempString = (k - 272.15).toString();
    return tempString.slice(0, 5);
  }

  getRain(obj) {
    let rain = JSON.stringify(obj)
    rain = rain.slice(-5, -1)
    return rain.startsWith(":") ? rain.slice(-3) : rain;
  }

}
