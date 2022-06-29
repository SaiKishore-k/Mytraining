import { Injectable } from '@angular/core';
import { User } from '../user-model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  getUsers(): any {
    return this.userArray
  }
  // getUserByid(id : string) : any{
  //   return this.userArray.find(ele=> ele.id ===id);
  // }

  constructor() { }
  userArray:Array<User> = ([
   
    {"id":"A1","firstName":"kishore","lastName":"koyalwar","age":22,"login":"bbog0","password":"QzVpGcNp","isDeleted":false},
{"id":"A2","firstName":"Katakam","lastName":"sowmya","age":23,"login":"dclemoes1","password":"SyYSzML","isDeleted":true},
{"id":"A3","firstName":"Gunthala","lastName":"gayatri","age":23,"login":"waveyard2","password":"spZlF9z4QRl","isDeleted":true},
{"id":"A4","firstName":"Ram","lastName":"Miryala","age":34,"login":"trippingale3","password":"eCGIzP9","isDeleted":false},
{"id":"A5","firstName":"sunny","lastName":"deol","age":51,"login":"medger4","password":"10dLefmTz","isDeleted":true},
{"id":"A6","firstName":"Esha","lastName":"Reba","age":30,"login":"rmaccourt5","password":"z83cju","isDeleted":false},
{"id":"A7","firstName":"Sharuk","lastName":"Khan","age":37,"login":"slenham6","password":"gN7xiop","isDeleted":false},
{"id":"A8","firstName":"Salman","lastName":"Khan","age":58,"login":"swreath7","password":"SOQAVItwTMZ","isDeleted":false},
{"id":"A9","firstName":"Delphine","lastName":"Gergely","age":25,"login":"dgergely8","password":"Tqu2BuiN","isDeleted":false},
{"id":"A10","firstName":"Deni","lastName":"Cortin","age":31,"login":"dcortin9","password":"Ec1EfHKZsb","isDeleted":false},

  ]);
  }
