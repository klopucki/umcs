import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {University} from '../university';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit, OnDestroy {

  public universities: University[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(public userService: UserService) {

  }

  ngOnInit(): void {
    this.subscriptions.add(this.userService.universityObservable.subscribe(university => {
      this.universities.push(university);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
