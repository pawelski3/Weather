import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { GetApiService } from 'src/app/services/get-api.service';
import { flipInX } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  City: any;
  CityName: any;
  DateArray = [];
  TempArray = [];
  //PressureArray = [];
  RainArray = [];
  WindArray = [];

  enterAnimation: TextAnimation = {
    animation: flipInX,
    delay: 50,
    type: 'letter',
  };

  constructor(private http: GetApiService) { }

  ngOnInit(): void {

    this.getData();
    this.chart();

  }

  getData() {
    if (this.http.getWeatherData()) {
      this.CityName = this.http.getCityData()
      this.City = this.http.getWeatherData()
      this.setArray(this.City)
    }
  }

  setArray(data) {
    for (let i of data.list) {
      this.DateArray.push(i.dt_txt)
      this.TempArray.push(parseFloat(this.calculate(i.main.feels_like)))
      i.rain ? this.RainArray.push(parseFloat(this.getRain(i.rain))) : this.RainArray.push(0)
      this.WindArray.push(i.wind.speed)
      //this.PressureArray.push(i.main.pressure)
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


  chart() {
    var myChart = new Chart("myChart", {
      type: 'line',
      options: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
      },
      data: {
        labels: this.DateArray,
        datasets: [{
          label: 'Temperatura',
          data: this.TempArray,
          backgroundColor: '#969692',
          borderColor: '#969692',
          fill: false,

        },
        {

          label: 'Prędkość wiatru',
          data: this.WindArray,
          backgroundColor: "green",
          borderColor: "green",
          fill: false,
          borderWidth: 2
        },
        {
          type: 'bar',
          label: 'Opady',
          data: this.RainArray,
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          fill: false,
          borderWidth: 2
        }

        ],

      },

    });
  }

}
