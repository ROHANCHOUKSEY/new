import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  constructor(){}

  getHello(): string{
    console.log("hello")
    console.log("my first testing")
    console.log("this is new feature")
    const a = 40
    return 'Hello World!';
  }


}
