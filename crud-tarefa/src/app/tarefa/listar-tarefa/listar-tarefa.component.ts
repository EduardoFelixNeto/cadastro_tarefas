import { Component, OnInit } from '@angular/core';

import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from 'src/app/shared/models/tarefa.model';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];
  
  constructor(private tarefaService: TarefaService){}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a tarefa ${tarefa.nome}?`)) {
    this.tarefaService.remover(tarefa.tarefaId!);
    this.tarefas = this.listarTodos();
    }
  }
}
