import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HighlightDirective } from './directive/highlight.directive';
import { SqrtPipe } from './pipe/sqrt.pipe';
import { HttpClientModule } from '@angular/common/http'
import { HardcodedAuthenticationService } from './service/hardcoded-authentication.service';
import { RouteGuardService } from './service/route-guard.service';
import { RestApiService } from './service/rest-api.service';
import { UserService } from './service/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    HighlightDirective,
    SqrtPipe,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HardcodedAuthenticationService,
    RouteGuardService,
    RestApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
