import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  /**
   * ngoặc vuông [] để chỉ @input:
   *
   * <app-input [input1]="Hello:" [input2]="Hungbeo"></app-input>
   */
  // 'input1': là tên attribute ở component tag
  @Input('input1') name1: String;

  // nếu ko đặt tên thì sẽ lấy tên biến luôn
  @Input() input2: String;

  constructor() {}

  ngOnInit(): void {}
}
