import { Injectable } from '@angular/core';


@Injectable()
export class LoadingService {

    constructor() {}
   
   openModal(){
       document.getElementById("open-loading").click();
     
   }

  closeModal(){
        document.getElementById("close-loading").click();
  }

}