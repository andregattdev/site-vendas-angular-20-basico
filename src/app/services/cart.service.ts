import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private carrinho: any[] = [];

  constructor() {}

  adicionar(produto: any) {
    this.carrinho.push(produto);
  }

  listar() {
    return [...this.carrinho]; // retorna uma cópia para evitar alterações diretas
  }

  remover(index: number) {
    this.carrinho.splice(index, 1);
  }

  limpar() {
    this.carrinho = [];
  }
}
