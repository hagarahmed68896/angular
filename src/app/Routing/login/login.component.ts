import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
formValidation = new FormGroup({
  name: new FormControl('', Validators.minLength(3)),
  age: new FormControl('',[Validators.min(20),Validators.max(40)]),

});
check(){
  if(this.formValidation.valid){
    Swal.fire({
      title: 'Greet, add success!',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong, try to login again, name length must be mor than 3 and age between 20 and 40!',
    })
  }
}
}

