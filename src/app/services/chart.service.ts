import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Temperature } from '../models/temperature';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private readonly TEMPERATURE_API_URL = 'api/temperatures';

  constructor(private httpClient: HttpClient) {}

  public getTemperatures(): Observable<Temperature[]> {
    return this.httpClient.get<Temperature[]>(this.TEMPERATURE_API_URL);
  }
}
