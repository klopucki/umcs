import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public username = 'Martyna';
  public universityName = '';

  public updateUniversity($event: string): void {
    this.universityName = $event;
  }
}
