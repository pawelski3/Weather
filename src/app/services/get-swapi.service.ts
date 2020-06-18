import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetSwapiService {

  CityData: any;
  WeatherData: any;
  GeoLat: number;
  GeoLon: number;

  constructor(private http: HttpClient) { }


  getForecast(location) {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=bf413845fbb4a52d7e157cbfdab5d964')
      .toPromise();
  }

  getUV() {
    return this.http.get('https://api.openweathermap.org/data/2.5/uvi/forecast?lat=' + this.GeoLat + '&lon=' + this.GeoLon + '&appid=bf413845fbb4a52d7e157cbfdab5d964&cnt=4')
      .toPromise();
  }

  getUvCurrent() {
    return this.http.get('https://api.openweathermap.org/data/2.5/uvi?lat=' + this.GeoLat + '&lon=' + this.GeoLon + '&appid=bf413845fbb4a52d7e157cbfdab5d964')
      .toPromise();
  }

  setVariable(Weather) {
    this.CityData = Weather.city.name;
    this.WeatherData = Weather;
    this.GeoLat = Weather.city.coord.lat;
    this.GeoLon = Weather.city.coord.lon;
    console.log("servis data: ", this.GeoLat, this.GeoLon)
  }

  getCityData() {
    return this.CityData;
  }

  getWeatherData() {
    return this.WeatherData;
  }

}
