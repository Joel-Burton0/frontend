import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    
  }
  newUser(oForm: NgForm){1
    this.authService.newUser(oForm.value).subscribe(res => {
      if(res['status']== 'success'){
        Swal.fire({
          icon: 'success',
          title: 'Successfully Registered',
        });
        this.router.navigateByUrl('/Login');
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Failed to Register'
        });
      }
    });
  }
}
