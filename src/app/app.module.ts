import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { EnvivoComponent } from './envivo/envivo.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ProgramacionComponent } from './programacion/programacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    EnvivoComponent,
    InformacionComponent,
    ProgramacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
