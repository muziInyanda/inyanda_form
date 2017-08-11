import {Component, ViewChild} from '@angular/core';
import {IonicPage, Keyboard, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Slides } from 'ionic-angular';
import {VerificationFormPage} from "../verification-form/verification-form";
import {HomePage} from "../home/home";

/**
 * Generated class for the FieldWorkerFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-field-worker-form',
  templateUrl: 'field-worker-form.html',
})
export class FieldWorkerFormPage {

  @ViewChild(Slides) slides: Slides;
  /* @ViewChild('signupSlider') signupSlider: any;*/

  public base64Image: string;

  fieldWorkerForm: FormGroup;
  submitAttempt: boolean = false;

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams, public keyboard: Keyboard) {
    this.keyboard.onClose(this.closeCallback);

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('field');

    this.fieldWorkerForm = formBuilder.group({
      /*username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
      privacy: ['', Validators.required],
      bio: [''],*/
      fieldWorkerFirstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      fieldWorkerLastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      fieldWorkerIdNumber:['', Validators.required],
      fieldWorkerCellphoneNumber:['', Validators.required]
    });

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  keyboardCheck() {
    console.log('The keyboard is open:', this.keyboard.isOpen());
  }
  closeCallback() {
    // call what ever functionality you want on keyboard close
    console.log('Closing time');
  }

  next(){
    /*this.slides.slideTo(2, 500);*/
    this.navCtrl.push(VerificationFormPage);

  }

  prev(){
   /* this.slides.slidePrev();*/
    this.navCtrl.push(HomePage);
  }

  save(){

    this.submitAttempt = true;

    if(!this.fieldWorkerForm.valid){
      this.slides.slideTo(0);
    }
    else if(!this.fieldWorkerForm.valid){
      this.slides.slideTo(1);
    }
    else {
      console.log("success!")
      console.log(this.fieldWorkerForm.value);
      console.log(this.fieldWorkerForm.value);
    }

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(FieldWorkerFormPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FieldWorkerFormPage');
  }

}
