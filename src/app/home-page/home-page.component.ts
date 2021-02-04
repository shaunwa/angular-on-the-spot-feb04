import { Component, OnChanges, OnInit } from '@angular/core';
import { DataLoaderService } from '../data-loader.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnChanges, OnInit {
    names = [];

  constructor(
      private dataLoader: DataLoaderService,
  ) { }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
      this.names = this.dataLoader.loadPeople().map(person => person.firstName);
  }

}
