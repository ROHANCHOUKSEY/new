import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  constructor(){}

  getHello(): string{
    console.log("hello")
    console.log("my first testing")
    const name = "Rohan"
    console.log("this is new feature")
    const a = 40
    function sub(a , b){
        console.log(a - b);
    }
    sub(2, 4);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    function abc(a, b, c){
        return a + b + c
    }

    console.log(abc(2, 4, 5))

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    return 'Hello World!';
  }


}
 