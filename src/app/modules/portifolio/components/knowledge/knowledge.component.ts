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
        width:"42px", 
        height:"42px",
        src:"assets/icons/knowledge/cs.svg",
        alt:"Ícone de conhecimento C Sharp", 
    },
    {
        width:"22px", 
        height:"24px",
        src:"assets/icons/knowledge/angular.svg",
        alt:"Ícone de conhecimento Angular", 
    },
    {
        width:"22px", 
        height:"24px",
        src:"assets/icons/knowledge/css3.svg",
        alt:"Ícone de conhecimento CSS3", 
    },
    {
        width:"22px", 
        height:"24px",
        src:"assets/icons/knowledge/html5.svg",
        alt:"Ícone de conhecimento HTML5", 
    },
    {
        width:"22px", 
        height:"24px",
        src:"assets/icons/knowledge/javascript.svg",
        alt:"Ícone de conhecimento Javascript", 
    },
    {
        width:"22px", 
        height:"24px",
        src:"assets/icons/knowledge/nodejs.svg",
        alt:"Ícone de conhecimento Node.js", 
    },
    {
        width:"22px", 
        height:"24px",
        src:"assets/icons/knowledge/sass.svg",
        alt:"Ícone de conhecimento SASS", 
    }

 ])
}
