import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FieldWorkerFormPage } from './field-worker-form';

@NgModule({
  declarations: [
    FieldWorkerFormPage,
  ],
  imports: [
    IonicPageModule.forChild(FieldWorkerFormPage),
  ],
})
export class FieldWorkerFormPageModule {}
