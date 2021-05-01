import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  gget(){
    this.savedate = localStorage.getItem("keydata1")
  }
  delet(){
  localStorage.removeItem("keydata1")
    
}
  savedate:string;
  ngOnInit(): void {
    
    //this.savedate = localStorage.getItem("keydata1")
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      console.log( localStorage.getItem( localStorage.key( i ) ) );
    
       //document.write(localStorage.getItem( localStorage.key( i ) ));
     
    }
    
   // document.write(JSON.stringify(this.tss));
   
  }


   tss = [
    {
      title: 'mr',
      firstname:'amar',
      lastname:'kumar',
      dob:'2021-04-15',
      email:'amar@gmail.com',
      pass:'56778',
      cpass:'56789'
    },
    {
      title: 'mr',
      firstname:'amar1',
      lastname:'kumar1',
      dob:'2020-04-15',
      email:'amar1@gmail.com',
      pass:'567781',
      cpass:'567891'
    }
  
  ]

  

}







