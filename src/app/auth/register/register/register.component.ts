import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserauthService } from '../../service/userauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  constructor(public fb:FormBuilder, private userauthService:UserauthService,private toastr:ToastrService) {
    this.registerForm = this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
   }

   get registerControl()
   {
     return this.registerForm.controls;
   }

   submitFormData()
   {
     if(this.registerForm.valid)
     {
       console.log(this.registerForm.value)
      //  this.userauthService.registerUser(this.registerForm.value).subscribe((res)=>{
      //    console.log(res)
      //  },(err)=>{
      //    console.log(err)
      //  })
       this.toastr.success('user registerd sucessfully','title')
       this.registerForm.reset()
     }
    
   }

   checkToastr(){
    this.toastr.success('user registerd sucessfully','title')
   }

  ngOnInit(): void {
  }

}
