import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
    people = [];

    constructor() { }

    loadPeople() {
        return [
            { firstName: 'John', lastName: 'Doe', favoriteFoods: ['pizza', 'broccoli'] },
            { firstName: 'Mike', lastName: 'Anderson', age: 100, favoriteFoods: ['pineapple'] },
            { firstName: 'Jane', lastName: 'Doe', age: 34, favoriteFoods: ['steak', 'coffee'] },
            { firstName: 'Hannah', lastName: 'Smith', age: 66 },
        ];
    }

    getPeople() {
        return this.people;
    }
}
