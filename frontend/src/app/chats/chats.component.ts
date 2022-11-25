import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  Chat = [{
    users:"Pippo",
    text:"Ciao",
    image:"https://cdn-icons-png.flaticon.com/128/119/119591.png"
  },
  {
    users:"Franco",
    text:"heyy",
    image:"https://cdn-icons-png.flaticon.com/128/119/119591.png"
  },
  {
  users:"Lucio",
  text:"Ciao Salvo!",
  image:"https://cdn-icons-png.flaticon.com/128/119/119591.png"
  },
  {
    users:"Bobo",
    text:"Cammel!",
    image:"https://cdn-icons-png.flaticon.com/128/119/119591.png"
    },
    {
      users:"Tano",
      text:"Ciaooo!",
      image:"https://cdn-icons-png.flaticon.com/128/119/119591.png"
      }
  ]
  
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  contact(){
    this.router.navigateByUrl('/contact')
    
  }
}
