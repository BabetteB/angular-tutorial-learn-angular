import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'San Francisco';
  message = '';
  turtles = '';

  isServerRunning = true;
  isEditable = true;

  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  onMouseLeave() {
    this.message = '';
  }

  onTurtelAdded(turtle : string){
    this.turtles = this.turtles.concat(turtle);
  }

}
