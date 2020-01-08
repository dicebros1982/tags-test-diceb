import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const coreModules = [MaterialModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [coreModules],
  exports: [coreModules]
})
export class CoreModule {}
