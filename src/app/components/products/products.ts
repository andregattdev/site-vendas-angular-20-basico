

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CartService } from '../../services/cart.service';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class ProductsComponent {
  filtroNome = '';
  filtroPrecoMin: number | null = null;

 produtos = [
  {
    nome: 'Notebook',
    preco: 4500,
    quantidade: 1,
    descricao: 'Processador Intel Core i7, 16GB RAM DDR4, SSD 512GB NVMe, tela Full HD 15.6" antirreflexo.'
  },
  {
    nome: 'Smartphone',
    preco: 2500,
    quantidade: 1,
    descricao: 'Tela AMOLED de 6.4", 128GB de armazenamento, câmera tripla de 64MP e bateria de longa duração.'
  },
  {
    nome: 'Fone Bluetooth',
    preco: 300,
    quantidade: 1,
    descricao: 'Conexão sem fio estável, isolamento de ruído e até 18h de bateria com estojo recarregável.'
  },
  {
    nome: 'Smartwatch',
    preco: 1200,
    quantidade: 1,
    descricao: 'Monitoramento cardíaco, contador de passos, oxímetro e integração com Android/iOS.'
  },
  {
    nome: 'Monitor 27"',
    preco: 1800,
    quantidade: 1,
    descricao: 'Painel IPS com resolução Full HD, bordas ultrafinas e taxa de atualização de 75Hz.'
  },
  {
    nome: 'Teclado Mecânico',
    preco: 650,
    quantidade: 1,
    descricao: 'Switches azuis com resposta tátil, iluminação RGB personalizável e estrutura em alumínio.'
  },
  {
    nome: 'Mouse Gamer',
    preco: 240,
    quantidade: 1,
    descricao: 'Sensor óptico de alta precisão (6400 DPI), botões programáveis e design ergonômico.'
  },
  {
    nome: 'Headset',
    preco: 410,
    quantidade: 1,
    descricao: 'Som estéreo com drivers de 50mm, microfone com cancelamento de ruído e hastes ajustáveis.'
  },
  {
    nome: 'Webcam HD',
    preco: 330,
    quantidade: 1,
    descricao: 'Resolução 1080p com foco automático, microfone embutido e suporte universal para monitores.'
  },
  {
    nome: 'Hub USB-C',
    preco: 190,
    quantidade: 1,
    descricao: 'Expansão com 3 portas USB 3.0, HDMI 4K, entrada SD e carregamento PD — ideal para notebooks.'
  }
];

  constructor(private cartService: CartService) {}

adicionarAoCarrinho(produto: any) {
  const item = {
    nome: produto.nome,
    preco: produto.preco,
    quantidade: produto.quantidade || 1
  };
  this.cartService.adicionar(item);
}

  produtosFiltrados() {
    return this.produtos.filter(p =>
      p.nome.toLowerCase().includes(this.filtroNome.toLowerCase()) &&
      (this.filtroPrecoMin == null || p.preco >= this.filtroPrecoMin)
    );
  }


}
