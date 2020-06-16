import { Component, OnInit,Input } from '@angular/core';
import { GetSwapiService } from 'src/app/services/get-swapi.service';
import { ActivatedRoute } from '@angular/router';

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



  }

  handleSearch() {
    this.http.getForecast(this.location).then(data => {
      console.log(data);
      //this.GeoLat=data.city.coord.lat
     // this.City = data;
      this.Error = false;
      this.setVariable(data);
      this.getUv();
    }).catch(err => {
      this.Error = "Podaj prawidłową nazwę miejscowości";
      //this.City = false;
    })
  }

  setVariable(data){
    this.GeoLat=data.city.coord.lat;
    this.GeoLon=data.city.coord.lon;
    // data.list.forEach(item=>{
    //   console.log("item: ",item.rain)
    //   let w=JSON.stringify(item.rain)?JSON.stringify(item.rain):"brak"
    //   console.log("key ",w.slice(-5,-1))
    //   //console.log("key ",Object.keys(item.rain));
    // })
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
      //this.GeoLat=data.city.coord.lat

    }).catch(err => {
      console.log(err)
    })
  }

  getRain(obj){
    //console.log("GRitem: ",obj)
      let w=JSON.stringify(obj)//?JSON.stringify(obj):"brak"
      //console.log("GRkey ",w.slice(-5,-1))
      w=w.slice(-5,-1)

      return w.startsWith(":")?w.slice(-3):w;
  }


}


