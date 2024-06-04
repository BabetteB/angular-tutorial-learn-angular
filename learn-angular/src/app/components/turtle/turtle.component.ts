import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-turtle',
  standalone: true,
  imports: [],
  templateUrl: './turtle.component.html',
  styleUrl: './turtle.component.css'
})
export class TurtleComponent {
  @Output()
  addTurtleEvent = new EventEmitter<string>();

  addTurtle(){
    this.addTurtleEvent.emit('🐢');
  }
}
