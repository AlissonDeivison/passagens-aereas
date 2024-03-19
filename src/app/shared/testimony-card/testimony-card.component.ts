import { Component } from '@angular/core';

@Component({
  selector: 'app-testimony-card',
  templateUrl: './testimony-card.component.html',
  styleUrl: './testimony-card.component.scss',
})
export class TestimonyCardComponent {
  testimony: String = `
  A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa.
  `;
  author: String = 'Lauro Matos';
}
