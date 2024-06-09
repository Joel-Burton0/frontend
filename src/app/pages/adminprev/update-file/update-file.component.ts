import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FleetsearchService } from 'src/app/service/fleet.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-file',
  templateUrl: './update-file.component.html',
  styleUrls: ['./update-file.component.css']
})
export class UpdateFileComponent implements OnInit{
  constructor(private FleetsearchService: FleetsearchService, private router:Router, private route: ActivatedRoute){}

  rental: any = [];
  id: number = 0;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id > 0){
      this.FleetsearchService.getvehicle(this.id).subscribe(res => {

        if(res['status']=='success'){
          const rentData = res!['data']!['vehicle'];
          this.rentalForm?.setValue({
            name: rentData['name'],
            description: rentData['description'],
            status: rentData['status'],
            price: rentData['price'],
            img: rentData['img']
          
          })
        }
      })
    }
  }
  @ViewChild('rentalForm')rentalForm?:NgForm;

  updateRental(oForm: NgForm){
    this.FleetsearchService.updatevehicle(this.id, oForm.value).subscribe(res =>{
      if(res['status']=='success'){
        Swal.fire({
          icon: 'success',
          title: 'Successfully Updated'
        });
        this.router.navigateByUrl('/Admin');
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Unable to Modify'
        });
      }
    });
  }
}
