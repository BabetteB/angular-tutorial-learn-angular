import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-turtle',
  standalone: true,
  imports: [],
  templateUrl: './turtle.component.html',
  styleUrl: './turtle.component.css'
})
export class TurtleComponent {
  @Input()
  turtleKind : string = '🦑';

  @Output()
  addTurtleEvent = new EventEmitter<string>();
  
  onInit(){
    if (this.turtleKind != '🐢')
      this.turtleKind = '🦑';
  }

  addTurtle(){
    this.addTurtleEvent.emit(this.turtleKind);
  }
}
