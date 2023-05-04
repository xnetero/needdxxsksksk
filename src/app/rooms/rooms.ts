import { Data } from "popper.js";

export interface Room{

    totalrooms:number;
    availableRooms:number;
    bookedRooms:number;

}

export interface Roomlist{
    roomtype:String;
    amenities:String;
    price:number;
    photo:string;
    checkinTime:Date,
    checkoutTime :Date,
}