import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AgeValidator} from "../../validators/age";
import {Camera} from "@ionic-native/camera";
import {EaPage} from "../ea/ea";
import {FieldWorkerFormPage} from "../field-worker-form/field-worker-form";

/**
 * Generated class for the VerificationFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verification-form',
  templateUrl: 'verification-form.html',
})
export class VerificationFormPage {
  imageURL

  @ViewChild('verificationSlider') verificationSlider: any;

  public base64Image: string;

  houseHoldHeadForm: FormGroup;
  fieldWorkerForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams, public camera: Camera) {

    this.houseHoldHeadForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      age: ['', AgeValidator.isValid],
      idNumber: ['', Validators.required],
      citizenship:['', Validators.required],
      marital:['', Validators.required]
    });
  }

  takePhoto(){
    this.camera.getPicture().then((imageData) => {
      this.imageURL = imageData
    }, (err) => {
      console.log(err);
    });
  }

  next(){
    /*this.verificationSlider.slideNext();*/
    this.navCtrl.push(EaPage);
  }

  prev(){
    /*this.verificationSlider.slidePrev();*/
    this.navCtrl.push(FieldWorkerFormPage);
  }

  save() {

    this.submitAttempt = true;

    if (!this.houseHoldHeadForm.valid) {
      this.verificationSlider.slideTo(0);
    }
    else if (!this.houseHoldHeadForm.valid) {
      this.verificationSlider.slideTo(1);
    }
    else {
      console.log("success!")
      console.log(this.houseHoldHeadForm.value);
      console.log(this.houseHoldHeadForm.value);
    }
  }

  /*idPhotoSave(){
    this.camera.getPicture({
      quality : 75,
      destinationType : this.camera.DestinationType.DATA_URL,
      sourceType : this.camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      saveToPhotoAlbum: false
    }).then(imageData => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }
*/
  /* maritalCertitificateSave(){

     this.camera.getPicture({
       quality : 75,
       destinationType : this.camera.DestinationType.DATA_URL,
       sourceType : this.camera.PictureSourceType.CAMERA,
       allowEdit : true,
       encodingType: this.camera.EncodingType.JPEG,
       targetWidth: 300,
       targetHeight: 300,
       saveToPhotoAlbum: false
     }).then(imageData => {
       this.base64Image = "data:image/jpeg;base64," + imageData;
     }, error => {
       console.log("ERROR -> " + JSON.stringify(error));
     });
   }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationFormPage');
  }

}
