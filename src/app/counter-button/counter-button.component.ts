import { Component, OnChanges, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {
    @Input() count;
    @Output() onCounterClicked = new EventEmitter<void>();

    constructor() { }

    onButtonClicked() {
        this.onCounterClicked.emit();
    }

    // ngOnChanges(): void {
    //     alert('In ngOnChanges!');
    // }

    // ngOnInit(): void {
    //     alert('In ngOnInit!');
    // }

    // ngOnDestroy(): void {
    //     alert('In ngOnDestroy');
    // }
}
