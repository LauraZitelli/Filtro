import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FiltroComponent } from '../filtro/filtro.component';

@Component({
  selector: 'app-invoices-service',
  templateUrl: './invoices-service.component.html',
  styleUrls: ['./invoices-service.component.scss']
})
export class InvoicesServiceComponent implements OnInit {

  public payments = [{nome: "Pago", estado: "Pago", preco: "29.99"}, {nome: "Pago", estado: "Pago", preco: "120.00"},
  {nome: "Pago", estado: "Pago", preco: "46.00"}, {nome: "Cancelado", estado: "Cancelado", preco: "432.50"},
  {nome: "Cancelado", estado: "Cancelado", preco: "32.50"}, {nome: "Agendado", estado: "Agendado", preco: "2456.54"},
  {nome: "Agendado", estado: "Agendado", preco: "1653.00"}, {nome: "Agendado", estado: "Agendado", preco: "2476.90"},
  {nome: "Cancelado", estado: "Cancelado", preco: "782.50"}, {nome: "Pendente", estado: "Pendente", preco: "1350.00"}];
  public filteredPayments = [{nome: "Pago", estado: "Pago", preco: "29.99"}, {nome: "Pago", estado: "Pago", preco: "120.00"},
    {nome: "Pago", estado: "Pago", preco: "46.00"}, {nome: "Cancelado", estado: "Cancelado", preco: "432.50"},
    {nome: "Cancelado", estado: "Cancelado", preco: "32.50"}, {nome: "Agendado", estado: "Agendado", preco: "2456.54"},
    {nome: "Agendado", estado: "Agendado", preco: "1653.00"}, {nome: "Agendado", estado: "Agendado", preco: "2476.90"},
    {nome: "Cancelado", estado: "Cancelado", preco: "782.50"}, {nome: "Pendente", estado: "Pendente", preco: "1350.00"}];
  public estadosSelecionados: any = [];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.filteredPayments);
  }

  openFiltroModal(): void {
    this.dialog.open(FiltroComponent, {
      data: this.estadosSelecionados
    }).afterClosed().subscribe(data => {
      if(data.length > 0) {
        this.estadosSelecionados = data;
        // console.log("estadosSelecionados: ", this.estadosSelecionados);
        this.filteredPayments = this.payments.filter((pagamento) => this.estadosSelecionados.find(estados => pagamento.estado === estados.estado));
      }
      // console.log("filteredPayments: ", this.filteredPayments);
    });
  }
}
