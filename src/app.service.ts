import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  constructor(){}

  getHello(): string{
    function abc(a, b){
        return a + b
    }

    console.log(abc(2, 4))

    return 'Hello World!';
  }


}
 