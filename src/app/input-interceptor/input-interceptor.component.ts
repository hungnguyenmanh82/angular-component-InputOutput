import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-interceptor',
  templateUrl: './input-interceptor.component.html',
  styleUrls: ['./input-interceptor.component.scss']
})
export class InputInterceptorComponent  {

  private _name:string = '';

  /**
   * Parent html:
   *      <app-input-interceptor [name] ="nameInputInterceptor" ></app-input-interceptor>
   *
   * Nếu ko định tên cho @input('') => thì sẽ lấy tên function để làm tên của @input
   * tách ra get,set nhìn hơi rồi mắt
   * Đầu vào tư Parent là string ở hàm set => chuyển đổi sang string ở ham get
   * kiểu đầu vào của Set và kiểu đầu ra Get khác nhau ok.
   */
  @Input()
  get name(): string { return this._name; }  // hàm này dc gọi sau. Chú ý kiểu Trả về
  set name(name: string) {  // hàm này đc gọi trc. chú ý kiểu đầu vào
    this._name = name.toUpperCase();
  }

}
