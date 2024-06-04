import { Component, OnInit } from '@angular/core';
import { FactService } from '../../services/fact.service';

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [],
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.css'
})
export class FactsComponent implements OnInit {

  facts: { id: number, fact: string }[] = [];

  constructor(private factService : FactService){}

  async ngOnInit() {
    this.facts = await this.factService.getAllFacts();
  }

}
