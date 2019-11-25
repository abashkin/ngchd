import { Component, OnInit, DoCheck, NgZone, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C1Component implements OnInit, DoCheck {

  constructor(private ngzone: NgZone) { }
  title: string;
  interval: any;
  ngOnInit() {
    this.title = 'Hello';
  }

  ngDoCheck() {
    console.log('Chacked C1');
  }



  changeTitle() {
    let count = 0;
    this.ngzone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.title = `Changed ${count++} times`;
      }, 100);
    });
  }

  resetTimer() {
    this.ngzone.run(() => this.title = this.title);
    clearInterval(this.interval);
  }

}
