import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  hidden = true

  constructor() { 
 
  }
  

  ngOnInit(): void {
  }

  contact(){
    this.hidden = false
    
  }

}
