import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit() {
  }

  addClient(){
    const modal = this.modalService.open(ModalComponent);
    modal.result.then(
      this.handleModalClienteFormClose.bind(this),
      this.handleModalClienteFormClose.bind(this)
    )
  }
  handleModalClienteFormClose(){}
  

}
