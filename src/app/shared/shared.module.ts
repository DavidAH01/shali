import { NgModule } from '@angular/core';
import { DirectivesModule } from '../directives.module';
import { HeaderComponent } from './header/header.component'; 

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    DirectivesModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class SharedModule { }
