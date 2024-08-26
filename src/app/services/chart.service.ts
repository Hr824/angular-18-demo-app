import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Temperature } from '../models/temperature';
import { VenteMensuelle } from '../models/vente';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private readonly TEMPERATURE_API_URL = 'api/temperatures';
  private readonly VENTE_MENSUELLE_API_URL = 'api/ventesMensuelles';

  constructor(private httpClient: HttpClient) {}

  public getTemperatures(): Observable<Temperature[]> {
    return this.httpClient.get<Temperature[]>(this.TEMPERATURE_API_URL);
  }

  public getVentesMensuelles(): Observable<VenteMensuelle[]> {
    return this.httpClient.get<VenteMensuelle[]>(this.VENTE_MENSUELLE_API_URL);
  }
}