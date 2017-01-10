import { Component, Inject } from '@angular/core';
import { WtsServiceService } from './wts-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WtsServiceService]
})
export class AppComponent {
  constructor( private _wtsServiceService: WtsServiceService) {

  }
  ngOnInit() {
    this._wtsServiceService.handleCallBack().subscribe(() => {
      console.log('parent function');
    })
  }
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
