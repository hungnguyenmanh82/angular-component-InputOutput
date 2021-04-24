import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit {
  private _nameSave: string = '';

  /**
   *  <@outputName> = <@inputName> + 'Change'
   *  <app-input-output [(name)] = " this.nameValue">
   */
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  get name(): string {
    return this._nameSave;
  } // kiểu trả về phải cùng kiểu đầu vào của Set nếu ko sẽ báo lỗi
  set name(name: string) {
    // hàm này đc gọi trc. chú ý kiểu đầu vào
    this._nameSave = name.toUpperCase();
  }

  constructor() {}

  ngOnInit(): void {}

  onNameChange(value: string) {
    // @output trigger event
    console.log(value);
    this.nameChange.emit(value);
  }
}
