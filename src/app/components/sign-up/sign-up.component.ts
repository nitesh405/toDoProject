import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuthService } from 'src/app/services/angular-fire-auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb: FormBuilder, private fireAuthService: AngularFireAuthService) { }
  signUpDetails = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  submit() {
    let { email, password } = this.signUpDetails.value;
    this.fireAuthService.signUp(email, password).then(res=>{
      console.log('signup scuccessfully',res)
    }).catch(err=>{
      console.log(err)
    })
  }
}
