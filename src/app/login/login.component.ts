import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  points: any;
  name:any;
  arr: any;
  
  constructor() {}
  
  ngOnInit() {
    
    console.log("Inside ngOnInit of login");
    this.name = 1234;
    this.arr=[0,1,2,3, 'one', 'two'];
    console.log(JSON.stringify( this.arr ));
    for (var i = 1; i <= 100; i++) {
      setTimeout(function(){
        console.log(i);
      }, 5000);
    }

    
    //  this.points = new Array(100);   
    // setTimeout(function(){ 
    // for (var i = 0; i < 100; i++) {
    //       this.points[i] = i + 1;
    //   }

    //   for (var j = 0; j <this.points.length; j++) {
    //       console.log(this.points[j]);
    //   }
    // },2000);

      // setTimeout(function(){
      //     for(var j=0;j < 100;j++)
      //     {
      //       this.points.push(j)
      //       for(var i=0;i<this.points.length; i++){
      //       console.log(this.points(j));
      //       }
      //     }
      //   },2000);

      
      }

  }

