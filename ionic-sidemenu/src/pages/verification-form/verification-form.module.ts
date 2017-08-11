import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerificationFormPage } from './verification-form';

@NgModule({
  declarations: [
    VerificationFormPage,
  ],
  imports: [
    IonicPageModule.forChild(VerificationFormPage),
  ],
})
export class VerificationFormPageModule {}
