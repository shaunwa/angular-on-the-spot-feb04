import { Component, OnInit } from '@angular/core';
import { DataLoaderService } from '../data-loader.service';

@Component({
  selector: 'app-person-info-page',
  templateUrl: './person-info-page.component.html',
  styleUrls: ['./person-info-page.component.css']
})
export class PersonInfoPageComponent implements OnInit {
    people = [];

    constructor(
      private dataLoader: DataLoaderService,  
    ) { }

    ngOnInit(): void {
        this.people = this.dataLoader.loadPeople();
    }

    onPersonClicked(name: string) {
        this.people = this.people.filter(
            person => person.firstName !== name,
        );
    }
}
