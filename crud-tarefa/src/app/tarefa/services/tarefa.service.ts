import { Injectable } from '@angular/core';
import { Tarefa } from 'src/app/shared/models/tarefa.model';

const LS_CHAVE: string = "tarefas";

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage[LS_CHAVE];
    return tarefas ? JSON.parse(tarefas):[];
  }

  inserir(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    const ultimoId = tarefas.length > 0 ? Math.max(...tarefas.map(t => t.tarefaId!)) : 0;
    tarefa.tarefaId = ultimoId + 1;
    tarefas.push(tarefa);
    localStorage[LS_CHAVE] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa | undefined {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.tarefaId === id);
  }

  atualizar(tarefa: Tarefa): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj,index,objs)=>{
      if(tarefa.tarefaId === obj.tarefaId){
        objs[index] = tarefa
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(tarefas);
  }

  remover(id: number): void{
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa=>tarefa.tarefaId !== id);
    localStorage[LS_CHAVE] = JSON.stringify(tarefas);
  }
}
