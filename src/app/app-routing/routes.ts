import { Routes } from '@angular/router';

// Route between components...
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

// Routes...
export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];