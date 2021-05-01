import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // validates date format yyyy-mm-dd
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      
  });
  }
 
 
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  savedate:string;
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert(' REGISTRATION SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 1));
    

    


    this.savedate = JSON.stringify(this.registerForm.value);
    localStorage.setItem("keydata1",this.savedate);
    this.products = JSON.parse(this.savedate)
    console.log(this.products);


    
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
  products = [
    {
      title: 'p1',
      firstname: 'p2',
      lastname: 'p3'
    },
    {
      title: 's1',
      firstname: 's2',
      lastname: 's3'
    }
  ]
  
}
