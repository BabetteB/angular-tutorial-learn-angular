import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({
    required: true
  })
  username = 'lil-loop';

  @Output()
  addTurtleEvent = new EventEmitter<string>();

  randomImageGeneratorLink = "https://picsum.photos/400";

  addTurtle(){
    this.addTurtleEvent.emit('🐢');
  }
}
