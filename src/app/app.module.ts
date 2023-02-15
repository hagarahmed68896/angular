import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './Routing/login/login.component';
import { ProfileComponent } from './Routing/profile/profile.component';
import { DetailsComponent } from './Routing/details/details.component';
import { ErrorComponent } from './Routing/error/error.component';
import { HeaderComponent } from './header/header.component';

const routes:Routes= [{path: '', component: LoginComponent},
{path: 'login', component: LoginComponent}, 
{path: 'login/:id', component: DetailsComponent},
{path: 'profile', component: ProfileComponent},
{path: '**', component: ErrorComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    StudentsComponent,
    LoginComponent,
    ProfileComponent,
    DetailsComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
