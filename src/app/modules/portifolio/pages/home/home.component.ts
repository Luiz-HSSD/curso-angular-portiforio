import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExpiriencesComponent } from '../../components/expiriences/expiriences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    KnowledgeComponent,
    ExpiriencesComponent,
    ProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
