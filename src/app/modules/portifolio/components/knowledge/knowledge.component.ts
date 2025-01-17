import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.inteface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
 public arrayKnowledge = signal<IKnowledge[]>([
    {
        src:"assets/icons/knowledge/angular.svg",
        alt:"Ícone de conhecimento angular", 
    },
    {
        src:"assets/icons/knowledge/css3.svg",
        alt:"Ícone de conhecimento css3", 
    },
    {
        src:"assets/icons/knowledge/html5.svg",
        alt:"Ícone de conhecimento html5", 
    },
    {
        src:"assets/icons/knowledge/javascript.svg",
        alt:"Ícone de conhecimento javascript", 
    },
    {
        src:"assets/icons/knowledge/nodejs.svg",
        alt:"Ícone de conhecimento nodejs", 
    },
    {
        src:"assets/icons/knowledge/sass.svg",
        alt:"Ícone de conhecimento sass", 
    }

 ])
}
