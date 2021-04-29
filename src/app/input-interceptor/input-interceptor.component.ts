import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-interceptor',
  templateUrl: './input-interceptor.component.html',
  styleUrls: ['./input-interceptor.component.scss'],
})
export class InputInterceptorComponent {
  private _name: string = ''; // để private vì ta dùng this.name rồi

  /**
   * Parent html:
   *      <app-input-interceptor [name] ="nameInputInterceptor" ></app-input-interceptor>
   *
   * Nếu ko định tên cho @input('') => thì sẽ lấy tên function để làm tên của @input
   * tách ra get,set nhìn hơi rồi mắt
   * Đầu vào tư Parent là string ở hàm set => chuyển đổi sang string ở ham get
   * kiểu trả về của hàm get phải giống kiểu đầu vào của set => nếu ko compile lỗi
   */
  @Input()
  set name(name: string) {
    // hàm này đc gọi trc. chú ý kiểu đầu vào
    // console.log('set name()');
    if (name) {
      this._name = name.toUpperCase();
    }
  }
  get name(): string {
    // console.log('get name()');
    return this._name;
  } // hàm này dc gọi sau. Chú ý kiểu Trả về

  private _lastName: string = '';
  @Input()
  set lastName(lastName: string) {
    // console.log('set lastName()');
    this._lastName = lastName;
  }

  get lastName(): string {
    // console.log('get lastName()');
    return this._lastName;
  }
}
