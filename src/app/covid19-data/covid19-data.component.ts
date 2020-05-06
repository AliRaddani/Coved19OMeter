import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { StateModel } from '../state-model';
import { element } from 'protractor';

@Component({
  selector: 'app-covid19-data',
  templateUrl: './covid19-data.component.html',
  styleUrls: ['./covid19-data.component.css']
})
export class Covid19DataComponent implements OnInit {

  public statesData: Array<StateModel> = [];

  constructor(private _covidDataService: CovidDataService) { }

  ngOnInit() {
    //this._covidDataService.getStatesData().subscribe();
    this._covidDataService.getStatesData().subscribe((data) => {
      this.statesData = data

      this.statesData.forEach(element => {


        if ((element.hasOwnProperty('covid19Deaths')) || element.covid19Deaths !== undefined) {

          element.percentageUsCovid19Deaths = ((element.covid19Deaths * 100) / 34521);

          this.statesData.sort(function (b, a) {
            return a.covid19Deaths - b.covid19Deaths;
          });

        }
        else {
          element.covid19Deaths = 0;
        }


      });




    });




  }

  

}






