import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa } from 'src/app/shared/models/tarefa.model';
import { TarefaService } from '../services/tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild("formTarefa") formTarefa!: NgForm;
  tarefa!: Tarefa;

  constructor(private tarefaService: TarefaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.tarefaService.buscarPorId(id);
    if (res !== undefined)
      this.tarefa = res;
    else
      throw new Error("Tarefa não encontrada: id = " + id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefa.custo = this.limparFormatacao(this.tarefa.custo!.toString())
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

  limparFormatacao(valorFormatado: string): number {
    if (!valorFormatado) return 0;
    const valorNumerico = valorFormatado.replace(/[R$\.,]/g, '').trim();
    return parseFloat(valorNumerico) / 100;
  }
}
