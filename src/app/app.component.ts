import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Test @Input()  with InputComponent
   */
  title1 = 'title 1';
  title2 = 'title 2';

  /**
   * test @output() with OuputComponent
   */
  outputMessage1: String = 'start';
  numberClick: number = 1234;   //khởi tạo

  changeOutput1Number: number = 8;

  outputImplement1(message: String) {
    this.outputMessage1 = message;
  }

  outputImplement2(numberClick: number) {
    this.numberClick = numberClick;
  }

  changeOutput1(){
    this.changeOutput1Number++;
  }
}
