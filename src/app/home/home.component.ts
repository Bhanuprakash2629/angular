import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string ="Bhanuprakash";

  Passport ="";
  
  Surname="";
  checkstatus=true;
  document :any;
  mobiles:string[]=['vivo','redmi','oneplus','iphone'];
  
  laptops=['hp','Levono','Dell','acer','MAC']
  
  todayDate = new Date();
  
  data= "Hello Word";
  bankBalance=78427142;
  performance =45;
  
  print(event:any){
    //alert(this .surname);
    alert(this.document.getElementById('secondname').value);
  }
  
  changeddata(event:any){
    alert('changed laptopname');
  }
}
