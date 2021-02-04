import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    count = 0;

    people = [
        { firstName: 'John', lastName: 'Doe', favoriteFoods: ['pizza', 'broccoli'] },
        { firstName: 'Mike', lastName: 'Anderson', age: 100, favoriteFoods: ['pineapple'] },
        { firstName: 'Jane', lastName: 'Doe', age: 34, favoriteFoods: ['steak', 'coffee'] },
        { firstName: 'Hannah', lastName: 'Smith', age: 66 },
    ];

    onPersonClicked(name: string) {
        this.people = this.people.filter(
            person => person.firstName !== name,
        );
    }

    incrementCount() {
        this.count += 1;
    }
}
