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
    this.tarefaService.listarTodos().subscribe(dados => {
      this.tarefas = dados;
      console.log(this.tarefas)
    }, error => {
      console.error('Erro ao buscar as tarefas', error);
      console.log(this.tarefas)
    });
  }

  remover(tarefa: Tarefa): void{
    this.tarefaService.remover(tarefa.tarefaId!).subscribe(()=>{
      this.tarefas = this.tarefas.filter(tarefa => tarefa.tarefaId !== tarefa.tarefaId);
    }, error => {
      console.error(`Erro ao tentar deletar o item de id ${tarefa.tarefaId}`, error);
    });
  }
}
