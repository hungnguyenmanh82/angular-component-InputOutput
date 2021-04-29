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
  set name(name: string) {
    // hàm này đc gọi trc. chú ý kiểu đầu vào
    /**
     * Lưu ý hàm này sẽ đc gọi lại nếu this.nameChange.emit(value)
     * Để tránh trigger event gặp vấn đề ta lên so sánh với current value
     * if(name == this._nameSave) return;
     */
    console.log('set name');
    this._nameSave = name.toUpperCase();
  }
  get name(): string {
    console.log('get name');
    // hàm này đc gọi sau. Kiểu trả về Getter phải giống đầu vào của Setter
    return this._nameSave;
  }

  constructor() {}

  ngOnInit(): void {}

  onNameChange(value: string) {
    // @output trigger event
    console.log(value);
    this.nameChange.emit(value); //hàm set nam() sẽ đc gọi lại
  }
}
