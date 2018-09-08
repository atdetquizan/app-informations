import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppInterceptor } from './interceptor/app-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [
    AppInterceptor
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
