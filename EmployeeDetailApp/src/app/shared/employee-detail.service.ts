import { Injectable } from '@angular/core';
import { EmployeeDetail } from './employee-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  formData:EmployeeDetail;
  readonly baseURL = 'http://localhost:50461/api/';
  list:EmployeeDetail[];
  constructor(private http:HttpClient) { }

  postEmployeeDetail(){
    return this.http.post(this.baseURL+'EmployeeDetails',this.formData)
  }

  updateEmployeeDetail(){
    return this.http.put(this.baseURL+'EmployeeDetails/'+this.formData.empId,this.formData)
  }

  flagEmpActivation(empId, emp){
    return this.http.put(this.baseURL+'EmployeeDetails/'+empId,emp)
  }

  deleteEmployeeDetail(id){
    return this.http.delete(this.baseURL+'EmployeeDetails/'+id);
  }

  refreshList(){
    this.http.get(this.baseURL +'EmployeeDetails')
    .toPromise()
    .then(res =>this.list = res as EmployeeDetail[]);
  }
}
