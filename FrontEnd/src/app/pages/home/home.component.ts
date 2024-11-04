import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentPage = 1;

  // Referenciando os templates com ViewChild
  @ViewChild('template1', { static: true }) template1!: TemplateRef<any>;
  @ViewChild('template2', { static: true }) template2!: TemplateRef<any>;
  @ViewChild('template3', { static: true }) template3!: TemplateRef<any>;

  // Função para obter o template com base em currentPage
  getTemplate(page: number) {
    switch (page) {
      case 1:
        return this.template1;
      case 2:
        return this.template2;
      case 3:
        return this.template3;
      default:
        return this.template1;
    }
  }

  // Função para alternar para o próximo template
  nextTemplate() {
    this.currentPage = this.currentPage < 3 ? this.currentPage + 1 : 1;
  }

  // Função para alternar para voltar template
  previousTemplate() {
    this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 3;
  }
}
