import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  constructor(){}



  getHello(): string{
    console.log("hello")
    console.log("my first testing")
    const name = "Rohan"
    return 'Hello World!';
  }
}
