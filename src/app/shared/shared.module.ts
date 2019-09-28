import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DirectivesModule } from '../directives.module';
import { HeaderComponent } from './header/header.component'; 

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class SharedModule { }
