import { Component } from '@angular/core';
import { DATAS } from './data_list';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent {
 
  datas=DATAS;

  constructor(){
    console.log(this.datas)
  }
  }


