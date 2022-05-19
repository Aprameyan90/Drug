import { Component } from "@angular/core";
import { FormArray ,FormBuilder,FormControl,FormGroup } from "@angular/core";
import { AlertController } from "@ionic/angular";
import AdvancedJSon from '../../assets/drug2.json';
import FormJSon from '../../assets/drug1.json';
import { ControlContainer } from "@angular/forms";

export interface Options {
    label?:string;
    placeholder?:boolean;
    type?: string;
    childern?: Array<FormControlObject>;
}

export interface FormControlObject{
    key:string;
    type:string;
    options:Options;
}

@Component({
    selector:'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage{
    myForm: FormGroup;
    drug2 = AdvancedJSon;
    drug1 = FormJSon;
    constructor(private fb:FormBuilder,private alterCtrl:AlertController){
        this.createControls(this.simpleForm)
    }
}
createControls(controls:Array<FormControlObject>){
for (let control of controls){
    const newFormControl = new FormControl();

    if (ControlContainer.options.required){
        new FormControl.setValidators(Validators.required);
    }
    this.myform.addControl(control.key,newFormControl)
}
console.log('Myform', this.myform);
}

async submitForm(){
    const alert =await this.alertCtrl.create({
        header:'Your Form',
        message: JSON.stringify(this.myForm.value),
        buttons:['OK']
    });
    await alert.present();
}
