import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactService {
  private factsUrl = 'http://localhost:3000/facts';

  constructor() { }

  async getAllFacts(): Promise<{ id: number, fact: string }[]> {
    const data = await fetch(this.factsUrl);
    return (await data.json()) ?? [];
  }
}
