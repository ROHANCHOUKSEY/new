import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  constructor(){}



  getHello(): string{
    console.log("hello")
    return 'Hello World!';
  }
}
