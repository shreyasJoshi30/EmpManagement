import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  constructor(public service:EmployeeDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

resetForm(form?:NgForm){
  if(form!= null)
  form.resetForm();
  this.service.formData = {
    empId :0,
    firstName:'',
    lastName:'',
    mobile:'',
    phone:'',
    email:'',
    isActive: false
  }
} 

onSubmit(form:NgForm){

  //Assuming only Australian numbers
 let mobNumberPattern = "^((\\+61-?)|0)?[0-9]{10}$";
  if(this.service.formData.empId ==0){
    this.insertRecord(form);
  }
  else {
    this.updateRecord(form);
  }
  
}

insertRecord(form:NgForm){

  this.service.formData.isActive=true;
  
  this.service.postEmployeeDetail().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.success("Employee details successfully saved","Employee Registration");
      this.service.refreshList();
    },
    err => {
      console.log(err);
    }
  )

}

updateRecord(form:NgForm){
  
  this.service.updateEmployeeDetail().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.info("Employee details successfully updated","Employee Registration");
      this.service.refreshList();
    },
    err => {
      console.log(err);
    }
  )
}


}


