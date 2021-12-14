import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';
import {University} from '../university';
import * as _ from 'lodash';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public helloMessage = 'I am not exist';

  @Input()
  public username;

  @Output()
  public universityName = new EventEmitter();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.universityObservable.subscribe(university => {
      this.universityName.emit(university.name);
    });
    this.helloMessage = this.userService.getHelloMessage();
  }

  public addUniversity(): void {
    const university = new University();
    university.city = 'Lublin';
    university.name = 'UMCS';

    const clonedUniversity = _.clone(university);

    this.userService.universityObservable.next(university);
  }
}
