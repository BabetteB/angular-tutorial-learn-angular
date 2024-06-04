import { Component } from '@angular/core';
import { TurtleComponent } from "../turtle/turtle.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TurtleComponent]
})
export class HomeComponent {
  message = '';
  turtles = '';

  isEditable = true;

  onMouseOver() {
    this.message = '🚀';
  }

  onMouseLeave() {
    this.message = '';
  }

  onTurtelAdded(turtle : string){
    this.turtles = this.turtles.concat(turtle);
  }

}
