import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';
import { EmployeeDetail } from 'src/app/shared/employee-detail.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-detail-list',
  templateUrl: './employee-detail-list.component.html',
  styles: []
})
export class EmployeeDetailListComponent implements OnInit {

  constructor(public service:EmployeeDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(ed:EmployeeDetail){
    console.log(ed.firstName);
    //this.service.formData = ed;
    this.service.formData = Object.assign({},ed);
  }

  activateEmployee(ed:EmployeeDetail) {
    ed.isActive = ed.isActive ? false : true;
   this.service.flagEmpActivation(ed.empId,ed);
  }

  deleteEmployee(empId) {
    
    if(confirm("Do you want to delete this Record ?")){

      this.service.deleteEmployeeDetail(empId)
    .subscribe(res =>{
      this.service.refreshList();
      this.resetForm()
      this.toastr.warning("Deleted Successfully","Employee Management")

    }, err => {
        console.log(err)
    } )
    }
   }

   resetForm(){    
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

}
