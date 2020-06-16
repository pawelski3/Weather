import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetSwapiService {

  location="Wrocław"

  constructor(private http: HttpClient) { }

  // getSwapi() {

  //   return this.http.get('https://swapi.dev/api/films')
  //     .toPromise();

  // }

  getForecast(location) {

    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=bf413845fbb4a52d7e157cbfdab5d964')
      .toPromise();

  }

  getUV() {
    //api.openweathermap.org/data/2.5/uvi/forecast?lat=37.75&lon=-122.37
    let currentUV=this.http.get('https://api.openweathermap.org/data/2.5/uvi?lat=53&lon=22&appid=bf413845fbb4a52d7e157cbfdab5d964')
    //console.log("current ",currentUV)
    return this.http.get('https://api.openweathermap.org/data/2.5/uvi/forecast?lat=53&lon=22&appid=bf413845fbb4a52d7e157cbfdab5d964&cnt=4')
      .toPromise();

  }

  getUvCurrent(){
     return this.http.get('https://api.openweathermap.org/data/2.5/uvi?lat=53&lon=22&appid=bf413845fbb4a52d7e157cbfdab5d964')
     .toPromise();
  }


}
