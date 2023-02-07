import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  divWidth = 300
  backcolor = 'blue'
  initial = {
    'width.px': 300,
    'background-color': 'blue',
    'color': 'white'
  }
  alternate = {
    'width.px': 500,
    'background-color': 'burlywood',
    'color': 'black'
  }
  change = false
  changeStyle() {
    // this.divStyle = {
    //   'width.px': 500,
    //   'background-color': 'burlywood',
    //   'color': 'black'
    // }
    this.change = true
  }
}
