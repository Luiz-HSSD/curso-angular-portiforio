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
    {
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
    }
   ]);
   public openDialog(data: IProjects){
    this.#dialog.open( DialogProjectsComponent , {
        data,
        panelClass: EDialogPanelClass.PROJECTS
    })
   }
}