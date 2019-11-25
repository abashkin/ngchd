import { Component, OnInit, DoCheck, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C2Component implements OnInit, OnChanges {

  @Input()
  foo: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Chacked C2');
  }

}
