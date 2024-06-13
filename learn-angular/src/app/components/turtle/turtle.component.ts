import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-turtle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './turtle.component.html',
  styleUrl: './turtle.component.css'
})
export class TurtleComponent {
  @Input()
  turtleKind : string = '🦑';

  @Output()
  addTurtleEvent = new EventEmitter<string>();

  favoriteVisible = false;
  favoriteAnimal = '';
  
  onInit(){
    if (this.turtleKind != '🐢')
      this.turtleKind = '🦑';
    else
      this.turtleKind = '🐢'
  }

  addTurtle(){
    this.addTurtleEvent.emit(this.turtleKind);
  }

  makeFavoriteVisible() {
    this.favoriteVisible = true;
  }

  showAnimal() {
    alert(this.favoriteAnimal);
  }
}
