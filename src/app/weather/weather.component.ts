import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../services/weather.service';
import { WeatherData } from './../weather-data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
city: string;
weather = {}  as WeatherData;
  constructor(private WeatherService: WeatherService) { }

  ngOnInit() {
    this.city = 'New Delhi';
    //this.getWeather();
  }

  getWeather() {
    console.log(this.city);
    this.WeatherService.getWeatherByCity(this.city).subscribe((response) => {
      this.weather.desc = response.weather[0].main;
      this.weather.city = this.city;
      this.weather.humidity = response.main.humidity;
      this.weather.temp = Math.floor(response.main.temp - 273.15) ;
      this.weather.max =  Math.floor(response.main.temp_max - 273.15);
      this.weather.min = Math.floor(response.main.temp_min - 273.15) ;
      this.weather.icon = response.weather[0].id;
      this.getImageType(this.weather.icon);
      console.log(response.weather[0].id);
      console.log(this.weather);
      console.log(this.weather.icon);
}
);
  }

  getImageType(icon: number) {
    if (icon >= 200 && icon < 233) {
      this.weather.iconName = 'thunder.svg';
    }
    if (icon >= 300 && icon < 332) {
        this.weather.iconName = 'rainy-3.svg';
      }
    if (icon >= 500 && icon < 532) {
          this.weather.iconName = 'rainy-6.svg';
        }
    if (icon >= 600 && icon < 632) {
          this.weather.iconName = 'snowy-3.svg';
        }
    if (icon === 800) {
        this.weather.iconName = 'day.svg';
        }

    if (icon > 800) {
        this.weather.iconName = 'cloudy-day-3.svg';
        }
    if (icon >= 700 && icon < 800)  {
          this.weather.iconName = 'cloudy-day-2.svg';
          }
     }
}
