import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-button-page',
  templateUrl: './counter-button-page.component.html',
  styleUrls: ['./counter-button-page.component.css']
})
export class CounterButtonPageComponent implements OnInit {
    count = 0;

    ngOnInit() {}

    incrementCount() {
        this.count += 1;
    }
}
