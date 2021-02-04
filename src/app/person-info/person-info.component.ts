import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
    @Input() i;
    @Input() person;

    @Output() personClicked = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    onButtonClicked(name: string) {
        this.personClicked.emit(name);
    }
}
