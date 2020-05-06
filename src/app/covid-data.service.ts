import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateModel } from './state-model';
import { take, map } from 'rxjs/operators';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {
  
  public statesData: Array<StateModel> = [];
  private _url: string  = "https://data.cdc.gov/resource/hc4f-j6nb.json";
  constructor(private http: HttpClient) { }

  getStatesData(): Observable<any> {
    return this.http.get<any> (this._url).pipe(
      take(1),
      map((states: Array<any>) => {

        states.forEach(resultStates => {
          const state = new StateModel({ stateName: resultStates.state, startWeek: resultStates.start_week,
                                         endWeek: resultStates.end_week, covid19Deaths: resultStates.covid_deaths
                                          });
          this.statesData.push(state);
        })
       return this.statesData;
      })
      
    )}


   
  
  


  }