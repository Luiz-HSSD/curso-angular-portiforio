import { Component, signal } from '@angular/core';
import { IExpiriences } from '../../interface/IExpiriences.interface';

@Component({
  selector: 'app-expiriences',
  standalone: true,
  imports: [],
  templateUrl: './expiriences.component.html',
  styleUrl: './expiriences.component.scss'
})
export class ExpiriencesComponent {
  public arrayExpiriences = signal<IExpiriences[]>([
    {
      summary: {
        strong: 'Desenvolvedor dotnet pleno',
        p: 'MW Microware | Fev 2024 - Ago 2024',
      },
      text: '<p>manutenção dos sistemas do Hospital da Polícia Militar de São Paulo em dotnet ASP .net e node.js.</p> <p> Implantei o sistema de catraca Rancho do restaurante do quartel com node.js, que inclui gerenciamento de contagem de crachás. </p><p> Criei um bot (bot do Telegram)  com respostas dos exames dos militares com validações e tratamentos da OWASP, com integrações. </p> <p> eu fiz manutenção no sistema de suprimentos médicos automáticos (armário de medicamentos) que implantei em dotnet.</p> <p> liderei o time  de desenvolvimento em reuniões técnicas</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor dotnet pleno',
        p: '7Comm | Ago 2020 - Set 2023',
      },
      text: '<p> Implantei o sistemas  de investimentos financeiros renda fixa e previdencia privada em OpenShift, DotNet e Azure Devops. </p> <p> Meu projeto principal é renda fixa, onde faço todo o projeto sozinho em DotNet. É claro que depois de mim, outros programadores trabalharam e implementaram um sistema de cache interno que torna o tempo de resposta do sistema instantâneo. </p><p> Desenvolvi um sistema de previdência privada em DotNet com diversas integrações e alta complexidade, otimizando os tempos de resposta. </p> <p> Preveni vulnerabilidades OWASP em todas as aplicações e as solucionei com a ajuda do Fortify. </p><p> Realizei a manutenção do sistema de IPO e desenvolvi novas funcionalidades. </p><p> Trabalhei com CI/CD na maioria dos sistemas.</p> <p> Realizei testes unitários de cobertura de 80% em todas as aplicações. </p><p> Liderei o time de Desenvolvimento em dailys demandas tecnicas RDM e demasi processos.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor dotnet júnior',
        p: 'MW Microware | Dez 2019 - Ago 2020',
      },
      text: '<p></p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor dotnet júnior',
        p: 'Metanoia Sistemas |  Jul 2019 - Nov 2019',
      },
      text: '<p></p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor dotnet júnior',
        p: 'IBRV | Ago 2018 - Mai 2019',
      },
      text: '<p></p>',
    },
    {
      summary: {
        strong: 'Estagio desnvolvedor ',
        p: 'Brvant | Set 2017 - Jul 2018',
      },
      text: '<p></p>',
    },

    ])

}
