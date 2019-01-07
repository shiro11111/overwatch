import { Injectable } from '@angular/core';
import { CompleteStats } from '../models/completeStats';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private http: HttpClient) {
  }

  loadInfo(platform: string, region: string, battletag: string): Observable<CompleteStats> {
    const url = `https://ow-api.com/v1/stats/${platform}/${region}/-${battletag}/profile`;

    return this.http.get(url);
  }
}
