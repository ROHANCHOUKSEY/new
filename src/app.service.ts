import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  constructor(){}

  getHello(): string{
    function abc(a, b, c){
        return a + b + c
    }

    console.log(abc(2, 4, 5))

    return 'Hello World!';
  }


}
 