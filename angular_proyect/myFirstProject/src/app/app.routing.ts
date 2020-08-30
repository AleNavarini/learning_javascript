import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';

import { User } from "./models/user";
import { NewComponent } from "./new_component/new_component.component";
import { AppComponent } from "./app.component";

const appRoutes: Routes = [
    {path:'', component: AppComponent},
    {path: 'new', component: NewComponent},
    {path: 'new/:name', component: NewComponent},
    {path: '**', component: AppComponent},
    
]

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);