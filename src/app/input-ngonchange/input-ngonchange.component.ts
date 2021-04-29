import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  //<app-input-ngonchange [name]="var">
  selector: 'app-input-ngonchange',
  templateUrl: './input-ngonchange.component.html',
  styleUrls: ['./input-ngonchange.component.scss'],
})
export class InputNgonchangeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() name: string;

  nameProperties: SimpleChange;

  /**
   * đây là cách bắt event khi @input có sự thay đổi.
   *
   */
  ngOnChanges(changes: SimpleChanges) {
    const nameProperties: SimpleChange = changes.name;
    this.nameProperties = nameProperties;
    // console.log(JSON.stringify(nameProperties));
  }
}
