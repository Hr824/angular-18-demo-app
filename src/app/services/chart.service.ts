import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Temperature } from '../models/temperature';
import { VenteMensuelle } from '../models/vente';
import { AppSettings } from '../app.custom.settings';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private httpClient: HttpClient) {}

  public getTemperatures(): Observable<Temperature[]> {
    return this.httpClient.get<Temperature[]>(AppSettings.API_END_POINTS.TEMPERATURES);
  }

  public getVentesMensuelles(): Observable<VenteMensuelle[]> {
    return this.httpClient.get<VenteMensuelle[]>(AppSettings.API_END_POINTS.VENTES_MENSUELLES);
  }
}