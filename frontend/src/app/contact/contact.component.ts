import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 
  hidden = true
  constructor() { 

    
  }

  ngOnInit(): void {
  }

  backContact(){

    this.hidden = false;
  }
}
