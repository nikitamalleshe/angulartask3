import { Component } from '@angular/core';
import { TEACHERS } from './teacher_list';

@Component({
  selector: 'app-teachersdetails',
  templateUrl: './teachersdetails.component.html',
  styleUrls: ['./teachersdetails.component.css']
})
export class TeachersdetailsComponent {
  teacher = TEACHERS; 
  constructor(){
   console.log(this.teacher);   
  }    

}
