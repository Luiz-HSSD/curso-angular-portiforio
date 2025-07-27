import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';
//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.Enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
   public arrayProjects = signal<IProjects[]>([
    /*{
      src:"assets/img/projects/vfull.png",
      alt:"Projeto Vida Fullstack",
      title:"Vida Fullstack",
      width:"100px",
      height:"51px",
      description:'<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links:[
        {
          name:"Conheça o blog",
          href:"https://vidafullstack.com.br"
        }
      ]
    }*/
   {
      src:"assets/img/projects/pokedex.svg",
      alt:"Projeto Pokedex",
      title:"Pokedex",
      width:"100px",
      height:"51px",
      description:'<p>Site da pokedex usando a Api da pokedex.</p>',
      links:[
        {
          name:"Visite o site",
          href:"https://luiz-hssd.github.io/curso-angular-pokedex/"
        }
      ]
    },
    {
      src:"assets/img/projects/lista-de-tarefas.png",
      alt:"Projeto Lista de Tarefas",
      title:"Lista de Tarefas",
      width:"100px",
      height:"51px",
      description:'<p>Site de uma simples lista de tarefas.</p>',
      links:[
        {
          name:"Visite o site",
          href:"https://luiz-hssd.github.io/curso-angular-lista-de-tarefas/"
        }
      ]
    },
   
   ]);
   public openDialog(data: IProjects){
    this.#dialog.open( DialogProjectsComponent , {
        data,
        panelClass: EDialogPanelClass.PROJECTS
    })
   }
}
