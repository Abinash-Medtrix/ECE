import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }        from './app.routing';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HomeSubComponent } from './home-sub/home-sub.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { TrailComponent } from './trail/trail.component';
import { InclusionCriteriaComponent } from './inclusion-criteria/inclusion-criteria.component';
import { ExclusionCriteriaComponent } from './exclusion-criteria/exclusion-criteria.component';
import { EligibilityCriteriaComponent } from './eligibility-criteria/eligibility-criteria.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
],
declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeSubComponent,
    SubNavComponent,
    TrailComponent,
    InclusionCriteriaComponent,
    ExclusionCriteriaComponent,
    EligibilityCriteriaComponent,

],
providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
],
  bootstrap: [AppComponent]
})
export class AppModule { }
