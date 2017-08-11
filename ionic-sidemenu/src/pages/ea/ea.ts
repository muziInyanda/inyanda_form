import {Component, ViewChild} from '@angular/core';
import {IonicPage, Keyboard, NavController, NavParams} from 'ionic-angular';
import {FormBuilder,FormGroup , Validators} from "@angular/forms";
import { Slides } from 'ionic-angular';
import {VerificationFormPage} from "../verification-form/verification-form";
/*import {HomePage} from "../home/home";*/
import {FieldWorkerFormPage} from "../field-worker-form/field-worker-form";
import {HomePage} from "../home/home";
import {Camera} from "@ionic-native/camera";

/**
 * Generated class for the EaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ea',
  templateUrl: 'ea.html',
})
export class EaPage {

  @ViewChild(Slides) slides: Slides;
  eaForm: FormGroup;
  submitAttempt: boolean = false;
  imageURL = "src/assets/images";

  constructor(public navCtrl: NavController,public formBuilder: FormBuilder, public navParams: NavParams, public keyboard: Keyboard,
              public camera: Camera) {

    this.keyboard.onClose(this.closeCallback);
    /*this.selectedItem = navParams.get('field');*/

    this.eaForm = formBuilder.group({
      /*username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
      privacy: ['', Validators.required],
      bio: [''],*/
      contact: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      visibleNumberOnHouse: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      streetName: ['', Validators.required],
      typeOfStructure: ['', Validators.required]
    });

  }

  takePhoto(){
    this.camera.getPicture().then((imageData) => {
      this.imageURL = imageData
    }, (err) => {
      console.log(err);
    });
  }

  keyboardCheck() {
    console.log('The keyboard is open:', this.keyboard.isOpen());
  }
  closeCallback() {
    // call what ever functionality you want on keyboard close
    console.log('Closing time');
  }

  /*next(){
    /!*this.slides.slideTo(2, 500);*!/
    this.navCtrl.push(VerificationFormPage);

  }*/

  prev(){
    /* this.slides.slidePrev();*/
    this.navCtrl.push(HomePage);
  }

  save(){

    this.submitAttempt = true;

    if(!this.eaForm.valid){
      this.slides.slideTo(0);
    }
    else if(!this.eaForm.valid){
      this.slides.slideTo(1);
    }
    else {
      console.log("success!")
      console.log(this.eaForm.value);
      console.log(this.eaForm.value);
    }

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(FieldWorkerFormPage, {
      item: item
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EaPage');
  }

}
