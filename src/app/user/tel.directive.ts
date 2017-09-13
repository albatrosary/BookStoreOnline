import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[bsoTel]',
  providers: [{provide: NG_VALIDATORS, useExisting: TelDirective, multi: true}]
})
export class TelDirective implements Validator {

  @Input() pattarn: string;

  constructor() { }
  
  validate(control: AbstractControl): {[key: string]: any} {
    console.log(this.pattarn);
    return this.pattarn ? telValidator(new RegExp(this.pattarn, 'i'))(control)
                             : null;
   }
}

export function telValidator(nameRe: RegExp): ValidatorFn {
  console.log('telValidator');

  return (control: AbstractControl): {[key: string]: any} => {
    const tel = nameRe.test(control.value);
    console.log('tel', tel);
    return tel ? {'tel': {value: control.value}} : null;
  };
}
