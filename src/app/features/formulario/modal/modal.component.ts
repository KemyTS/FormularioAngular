import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Formulario } from '../models/formulario';
import { FormularioService } from '../services/formulario.service';
import { DocumentReference } from '@angular/fire/firestore';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    public activeModal:NgbActiveModal, 
    private formularioService:FormularioService) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      idc: ['', Validators.required],
      cliente: ['', Validators.required],
      done: false
    });
  }

  saveCliente(){
    if (this.clienteForm.invalid) {
      return;
    }

    let formulario: Formulario = this.clienteForm.value;
    formulario.lastModifiedDate = new Date();
    formulario.createdDate = new Date();
    this.formularioService.saveCliente(formulario)
    .then(response => this.handleSuccessfulSaveCliente(response, formulario))
    .catch(err => console.error(err));

  }

  handleSuccessfulSaveCliente(response: DocumentReference, formulario: Formulario) {
    this.activeModal.dismiss({ formulario: formulario, id: response.id, createMode: true });
  }

}
