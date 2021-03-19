import { Component } from '@angular/core';
import { LiftBuilder } from './lifts/lift-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'road-to-arnold-classic';
  lift;

  constructor() {
    this.lift = new LiftBuilder('Curl').setReps(12).setWeight(135).setSets(2).build();
  }
}
