import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { User } from '../user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  signup: FormGroup;
  email:string;
  displayUser:User;
  constructor(private _actRoute:ActivatedRoute,private _userdata:UserdataService,private fb:FormBuilder,private _router:Router) { }

  ngOnInit() {
    this.signup=this.fb.group({
      user_email: new FormControl(null,[Validators.required]),
      user_name: new FormControl(null,Validators.required),
    })
  }
  // onUserEdit()
}
