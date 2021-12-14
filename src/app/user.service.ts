import {Injectable} from '@angular/core';
import {University} from './university';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public universityObservable: Subject<University> = new Subject<University>();

  constructor() {
  }

  public getHelloMessage(): string {
    return 'I am ROBOCOP';
  }
}
