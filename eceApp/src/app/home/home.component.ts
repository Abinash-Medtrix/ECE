import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
declare var $: any;
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

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
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}