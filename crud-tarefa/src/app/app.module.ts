import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaModule } from './tarefa/tarefa.module';
import { CurrencyMaskDirective } from './shared/directives/currency-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TarefaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
