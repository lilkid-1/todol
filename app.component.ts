import { Component } from '@angular/core';
import { AppData } from './AppData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["lamborghini","ferrari","koenigsegg"];
  newItem="";
  pushItem=function()
  {
    if(this.newItem !="")
    {
      this.items.push(this.newItem);
      this.newItem="";
    }
  }
  removeItem=function(index)
  {
    this.items.splice(index,1);
  }
}
