import { Component, OnInit,Input } from '@angular/core';
import { GetSwapiService } from 'src/app/services/get-swapi.service';
import { ActivatedRoute } from '@angular/router';
import { flipInX } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  //@Input()
  City: any;
  location: any;
  dateCompare: any;
  Error: any;
  GeoLat:number;
  GeoLon:number;
  UV:any;


  constructor(private http: GetSwapiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getData()


  }

  getData(){
    if(this.http.getWeatherData()){
    let w =this.http.getCityData()
    let w1=this.http.getWeatherData()
    this.City=this.http.getWeatherData()
    console.log(w,w1)
    this.Error = false;
    this.setVariable(this.City);
    this.getUv();
    }
  }

  setVariable(data){
    this.GeoLat=data.city.coord.lat;
    this.GeoLon=data.city.coord.lon;

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

  getUv(){
    this.http.getUV().then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err)
    })
  }

  getRain(obj){
      let w=JSON.stringify(obj)
      w=w.slice(-5,-1)
      return w.startsWith(":")?w.slice(-3):w;
  }

  enterAnimation: TextAnimation = {
    animation: flipInX,
    delay: 50,
    type: 'letter',
  };

}


