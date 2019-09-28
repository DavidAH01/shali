import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    state: boolean  = false;
    stateObservable: any;
    stateObserver: any;
    constructor() {
    }
    
    showState() {
        return this.stateObservable = new Observable(observer => {
            this.stateObserver = observer;
        });
    }

    toggleState() {
        this.state = !this.state;
        this.stateObserver.next(this.state)
    }
}
