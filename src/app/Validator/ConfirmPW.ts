// import { FormGroup, AbstractControl } from '@angular/forms';
// export function passwordMatch(password: string, Cpassword: string) {
//   return function (form: AbstractControl) {
//     const passwordValue = form.get(password)?.value;
//     const CpasswordValue = form.get(Cpassword)?.value;
//     console.log(form);
//     console.log(passwordValue);

//     if (passwordValue === CpasswordValue) return null;
//     return { passwordMatch: true };
//   };
// }

// import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// export const passwordMatch: ValidatorFn = (
//   control: AbstractControl
// ): ValidationErrors | null => {
//   let password = control.get('Password');
//   let confirmpassword = control.get('ConfirmPassword');
//   if (
//     password &&
//     confirmpassword &&
//     password?.value != confirmpassword?.value
//   ) {
//     return {
//       passwordmatcherror: true,
//     };
//   }
//   return null;
// };
