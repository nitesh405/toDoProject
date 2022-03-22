import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuthService } from 'src/app/services/angular-fire-auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  constructor(private fb: FormBuilder, private fireAuthService: AngularFireAuthService) { }
  loginDetails = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  submit() {
    let { email, password } = this.loginDetails.value
    this.fireAuthService.signIn(email,password).then(res=>{
      console.log("you are signed in",res)
    }).catch(err=>{
      console.log(err)
    })
  }
}
