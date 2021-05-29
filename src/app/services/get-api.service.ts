import { hashApi } from './config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  CityData: any;
  WeatherData: any;
  GeoLat: number;
  GeoLon: number;

  constructor(private http: HttpClient) { }

  getForecast(location) {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + location + hashApi)
      .toPromise();
  }

  getUV() {
    return this.http.get('https://api.openweathermap.org/data/2.5/uvi/forecast?lat=' + this.GeoLat + '&lon=' + this.GeoLon + hashApi+'&cnt=4')
      .toPromise();
  }

  getUvCurrent() {
    return this.http.get('https://api.openweathermap.org/data/2.5/uvi?lat=' + this.GeoLat + '&lon=' + this.GeoLon + hashApi)
      .toPromise();
  }

  setVariable(Weather) {
    this.CityData = Weather.city.name;
    this.WeatherData = Weather;
    this.GeoLat = Weather.city.coord.lat;
    this.GeoLon = Weather.city.coord.lon;
  }

  getCityData() {
    return this.CityData;
  }

  getWeatherData() {
    return this.WeatherData;
  }

}
