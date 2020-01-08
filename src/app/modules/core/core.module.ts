import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";

const coreModules = [MaterialModule, ReactiveFormsModule];

@NgModule({
  imports: [coreModules],
  exports: [coreModules]
})
export class CoreModule {}
