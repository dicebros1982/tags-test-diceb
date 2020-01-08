import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/';
//import { MatFormFieldModule } from '@angular/material/';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  //MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  BrowserAnimationsModule,
  MatRadioModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule {}
