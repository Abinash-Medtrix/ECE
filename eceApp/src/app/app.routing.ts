import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { HomeSubComponent } from './home-sub/home-sub.component';
import { TrailComponent } from './trail/trail.component';
import { InclusionCriteriaComponent } from './inclusion-criteria/inclusion-criteria.component';
import { ExclusionCriteriaComponent } from './exclusion-criteria/exclusion-criteria.component';
import { ExclusionCriteriaSubComponent } from './exclusion-criteria-sub/exclusion-criteria-sub.component';
import { InclusionCriteriaSubComponent } from './inclusion-criteria-sub/inclusion-criteria-sub.component';
import { GrossDescriptionComponent } from './gross-description/gross-description.component';
import { MicroscopicDiagnosisComponent } from './microscopic-diagnosis/microscopic-diagnosis.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home-sub', component: HomeSubComponent },
    { path: 'trail', component: TrailComponent },
    { path: 'inclusion-criteria', component: InclusionCriteriaComponent },
    { path: 'exclusion-criteria', component: ExclusionCriteriaComponent },
    { path: 'inclusion-criteria-sub', component: InclusionCriteriaSubComponent},
    { path: 'exclusion-criteria-sub', component: ExclusionCriteriaSubComponent},
    { path: 'gross-description', component: GrossDescriptionComponent},
    { path: 'microscopic-diagnosis', component: MicroscopicDiagnosisComponent},
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }


];



export const routing = RouterModule.forRoot(appRoutes);