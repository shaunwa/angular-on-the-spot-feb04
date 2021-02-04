import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterButtonPageComponent } from './counter-button-page/counter-button-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonInfoPageComponent } from './person-info-page/person-info-page.component';

const routes: Routes = [{
    path: '',
    component: HomePageComponent,
}, {
    path: 'counter',
    component: CounterButtonPageComponent,
}, {
    path: 'person-info',
    component: PersonInfoPageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
