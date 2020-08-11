import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  /**
   * Parent html:
   *       <app-input [input1]="Hello:" [input2]="Hungbeo"></app-input>
   *
   * ngoặc vuông [] để chỉ @input:
   */
  // 'input1': là tên attribute ở component-tag trong Parent html
  @Input('input1') name1: String;

  // nếu ko đặt tên thì sẽ lấy tên biến luôn => dùng cách này
  @Input() input2: String;

  constructor() {}

  ngOnInit(): void {}
}
