import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Info Negara';

  toAllCountry: boolean = false;

  handleToAllCountry(){
    if(!this.toAllCountry){
      this.toAllCountry = true;
    }
    else{
      this.toAllCountry = false;
    }
  }
}
