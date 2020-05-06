import { element } from 'protractor';

export class StateModel {
    
        stateName: string;
        startWeek: Date;
        endWeek: Date;
        covid19Deaths: number;
        percentageUsCovid19Deaths: number;
        
        public constructor(init?: Partial<StateModel>) {
            Object.assign(this, init);
        }

        
    }
    

