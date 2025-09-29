import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})

export class CartComponent implements OnInit {
  carrinho: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.carrinho = this.cartService.listar();
  }

  remover(index: number) {
    this.cartService.remover(index);
    this.carrinho = this.cartService.listar();
  }

  limparCarrinho() {
    this.cartService.limpar();
    this.carrinho = this.cartService.listar();
  }

  finalizarCompra() {
  alert('Pedido finalizado com sucesso!');
  this.cartService.limpar();
  this.carrinho = this.cartService.listar();
}

  get total() {
    return this.carrinho.reduce(
      (soma, item) => soma + item.preco * item.quantidade,
      0
    );
  }

  atualizarTotal() {
  this.carrinho = [...this.carrinho]; // força o Angular a perceber a mudança
}
}
