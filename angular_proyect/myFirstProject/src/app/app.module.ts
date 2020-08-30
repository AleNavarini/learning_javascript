import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent} from './new_component/new_component.component';
import { CompFromCmdComponent } from './comp-from-cmd/comp-from-cmd.component'
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    CompFromCmdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
