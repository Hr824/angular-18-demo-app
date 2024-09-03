import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Temperature } from '../models/temperature';
import { VenteMensuelle } from '../models/vente';
import { apiEndpoints } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private httpClient: HttpClient) {}

  public getTemperatures(): Observable<Temperature[]> {
    return this.httpClient.get<Temperature[]>(apiEndpoints.TEMPERATURES);
  }

  public getVentesMensuelles(): Observable<VenteMensuelle[]> {
    return this.httpClient.get<VenteMensuelle[]>(apiEndpoints.VENTES_MENSUELLES);
  }
}