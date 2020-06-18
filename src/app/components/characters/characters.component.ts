import { Component, OnInit } from '@angular/core';
import { GetSwapiService } from 'src/app/services/get-swapi.service';
import { flipInX } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  City:any;
  UV1 = [];
  UvCurrent: any;

  constructor(private http: GetSwapiService) { }

  ngOnInit(): void {
    this.City=this.http.getCityData();
    this.getUv();


  }

  getUv() {
    this.getUvCurrent();
    this.http.getUV().then(data => {
      this.setVariables(data);
      console.log("uv z compo: ",data)
      //this.UV=data;
    }).catch(err => {
      console.log(err)
    })
  }

  getUvCurrent() {
    this.http.getUvCurrent().then(data => {
      //new Date(data[2].date));
      this.UvCurrent = data;
    }).catch(err => {
      console.log(err)
    })
  }

  setVariables(data) {
    for (let i of data) {
      let tab = [];
      tab.push(new Date(i.date_iso), i.value);
      //console.log("tab: ",tab)
      this.UV1.push(tab);
    }
  }

  enterAnimation: TextAnimation = {
    animation: flipInX,
    delay: 50,
    type: 'letter',
  };
}
