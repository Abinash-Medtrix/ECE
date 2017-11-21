import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { HomeSubComponent } from './home-sub/home-sub.component';
import { TrailComponent } from './trail/trail.component';
import { InclusionCriteriaComponent } from './inclusion-criteria/inclusion-criteria.component';
import { ExclusionCriteriaComponent } from './exclusion-criteria/exclusion-criteria.component';
import { EligibilityCriteriaComponent } from './eligibility-criteria/eligibility-criteria.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home-sub', component: HomeSubComponent },
    { path: 'trail', component: TrailComponent },
    { path: 'eligibility-criteria', component: EligibilityCriteriaComponent },
    { path: 'inclusion-criteria', component: InclusionCriteriaComponent },
    { path: 'exclusion-criteria', component: ExclusionCriteriaComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }


];



export const routing = RouterModule.forRoot(appRoutes);