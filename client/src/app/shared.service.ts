import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()

export class SharedService {
    isLogin = new BehaviorSubject<any>(null)

    getting() {
        return this.isLogin.asObservable();
    }

    send(val) {
        this.isLogin.next(val);
    }
}