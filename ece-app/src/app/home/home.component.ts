import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent implements OnInit {

  constructor() { 

    $( document ).ready(function() {
      $( ".navBtn" ).click(function() {
        $('.sidenav').animate({"width": "83.3%"}, 50);
        $('.closebtn').show();
      });

      $( ".closebtn" ).click(function() {
        $('.sidenav').animate({"width": "0%"}, 50);
        $('.closebtn').hide();
      });
  
  
  
    });



  
  

}

  ngOnInit() {
  }

  
  
}
