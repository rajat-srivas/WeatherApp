import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class WeatherService {
weatherData: any;
apikey = 'dd03e22a0497b586607d5caf82b9c7fd';
baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';

constructor(private http: HttpClient) { }

getWeatherByCity(city: string): Observable<any> {
    return this.http.get(this.baseUrl + city + '&appid=' + this.apikey);
}
}
