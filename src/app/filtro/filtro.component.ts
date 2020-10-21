import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  listagemDeEstado = new MatTableDataSource <any>(null)
  selecionados = new SelectionModel <any>(true, [])
  colunas = [ 'nome', 'select' ]
  estados = [ {nome:  'Pago', estado: 'Pago'}, {nome: 'Cancelado', estado: 'Cancelado'}, {nome: 'Pendente', estado: 'Pendente'}, {nome: 'Agendado', estado: 'Agendado'} ]

  constructor(
    @Inject(MAT_DIALOG_DATA) private estadosSelecionados: any[],
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<FiltroComponent>
  ) { }

  ngOnInit(): void {
    this.listagemDeEstado = new MatTableDataSource <any>(this.estados);
    // this.selecionados = new SelectionModel <any>(true, this.estadosSelecionados ? this.estadosSelecionados : []);
  }

  closeModal(): void {
    console.log("Selecionados: ", this.selecionados.selected);
    this.dialogRef.close(this.selecionados.selected);
  }

}
