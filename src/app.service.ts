import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  constructor(){}



  getHello(): string{
    console.log("hello")
    console.log("my first testing")
<<<<<<< HEAD
    const name = "Rohan"
=======
    console.log("this is new feature")
>>>>>>> main
    return 'Hello World!';
  }
}
