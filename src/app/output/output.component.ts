import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutputInterface } from './OutputInterface';

@Component({
  selector: 'app-output',
  templateUrl:'./output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  ngOnInit(){

  }
  /**
   * 'output1' là tên attribute ở component tag  <app-output (output1)="callback($event)">
   *  nếu ko đặt tên thì lấy tên biến làm tên attribute
   *  EventEmitter<T> là bắt buộc khi dùng @output. đây là class hỗ trợ của Angular
   */
  @Output('output1') testOutput1 = new EventEmitter<string>(); // String: là ouput child send parent

  /**
   * 'output2' là tên attribute ở component tag  <app-output (output2)="callback($event)">
   *
   *  EventEmitter<T> là bắt buộc khi dùng @output. đây là class hỗ trợ của Angular
   */
  @Output() output2 = new EventEmitter<number>(); // String: là ouput

  numberClick:number=0;

  onClick1() {
    // component gửi data cho Parent
    this.testOutput1.emit('message1 from OutputComponent');
  }

  onClick2() {
    // component gửi data cho Parent
    this.numberClick++;
    this.output2.emit(this.numberClick);
  }
}
