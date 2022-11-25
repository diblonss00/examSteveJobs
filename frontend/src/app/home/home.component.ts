import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Chat = [{
    chatId:1,
    users:"Pippo",
    text:"Ciao",
    image:"https://cdn-icons-png.flaticon.com/128/119/119591.png"
  },
  {
    chatId:2,
    users:"Franco",
    text:"heyy",
    image:"https://cdn-icons-png.flaticon.com/128/119/119591.png"
  },
  {
    chatId:3,
  users:"Lucio",
  text:"Ciao Salvo!",
  image:"https://cdn-icons-png.flaticon.com/128/119/119591.png"
  },
  {
    chatId:4,
    users:"Bobo",
    text:"Cammel!",
    image:"https://cdn-icons-png.flaticon.com/128/119/119591.png"
    },
    {
      chatId:5,
      users:"Tano",
      text:"Ciaooo!",
      image:"https://cdn-icons-png.flaticon.com/128/119/119591.png"
      }
  ]

  

  constructor(private router: Router) { 
 
  }
  

  ngOnInit(): void {
  }

  contact(){
    this.router.navigateByUrl('/contact')
    
  }
  


}
