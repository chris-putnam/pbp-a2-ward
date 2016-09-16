import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  // [] = one way component to dom
  // () = event binding dom to component

  title = 'Customer App';
  name = 'Ward';
  wardsColor = 'red';

  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'blue' ? 'red' : 'blue';
  }
}
