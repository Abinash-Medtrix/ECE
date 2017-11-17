import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { HomeSubComponent } from './home-sub/home-sub.component';
import { TrailComponent } from './trail/trail.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home-sub', component: HomeSubComponent },
    { path: 'trail', component: TrailComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }


];



export const routing = RouterModule.forRoot(appRoutes);