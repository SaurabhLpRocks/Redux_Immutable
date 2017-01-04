import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testVar: string = 'this is test string';
  testObj = {
    name: 'Rhushikesh',
    job: 'QA'
  }
  title = 'app works!';
  changeString() {
    this.testVar = 'New string';
  }
  changeName() {
    this.testObj.name = 'Rhushikesh Gopal Lokhande';
  }
  changeObg() {
    this.testObj = {
      name: 'Rhushikesh Lokhande',
      job: 'Dev'
    }
  }
}
