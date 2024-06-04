import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { FactService } from './services/fact.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  city = 'San Francisco';
  message = '';
  turtles = '';

  isServerRunning = true;
  isEditable = true;

  facts: { id: number, fact: string }[] = [];
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];

  constructor(private factService : FactService) {}

  async ngOnInit() {
    this.facts = await this.factService.getAllFacts();
  }

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
