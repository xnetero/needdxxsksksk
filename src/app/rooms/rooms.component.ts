import { Component, OnInit } from '@angular/core';
import { Room, Roomlist } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit
 {

  constructor() { }

  ngOnInit(): void {
    // Add initialization code here
  }


  // roooms:Room={
  //   totalrooms:20,
  //   availableRooms:10,
  //   bookedRooms:10
  // }

  // rooms:Room[]=[
  //   {
  //   totalrooms:20,
  //   availableRooms:10,
  //   bookedRooms:10
  //   },
  //   {
  //     totalrooms:30,
  //     availableRooms:20,
  //     bookedRooms:7
  //     },

  // ]

  

  roomList:Roomlist[]=[
     {
      roomtype:'Room DELUXE',
      amenities:'air conditioner, free wifi,tv,bathroom,kitchen',
      price:500,
      photo:'https://media-cdn.tripadvisor.com/media/photo-s/06/57/7f/aa/grand-luxe-room-hotel.jpg',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime :new Date('18-Nov-2022')
  
     }
  ]
}
