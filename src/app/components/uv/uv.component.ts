import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/services/get-api.service';
import { flipInX } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'app-characters',
  templateUrl: './uv.component.html',
  styleUrls: ['./uv.component.css']
})
export class CharactersComponent implements OnInit {

  City: any;
  UV1 = [];
  UvCurrent: any;

  enterAnimation: TextAnimation = {
    animation: flipInX,
    delay: 50,
    type: 'letter',
  };

  constructor(private http: GetApiService) { }

  ngOnInit(): void {
    this.City = this.http.getCityData();
    this.getUv();
  }

  getUv() {
    this.getUvCurrent();
    this.http.getUV().then(data => {
      this.setVariables(data);
    }).catch(err => {
      //console.log(err)
    })
  }

  getUvCurrent() {
    this.http.getUvCurrent().then(data => {
      this.UvCurrent = data;
    }).catch(err => {
      //console.log(err)
    })
  }

  setVariables(data) {
    for (let i of data) {
      let tab = [];
      tab.push(new Date(i.date_iso), i.value);
      this.UV1.push(tab);
    }
  }


}
