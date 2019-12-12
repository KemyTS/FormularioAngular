import { Injectable } from '@angular/core';
import { AngularFirestore,DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormularioViewModel } from '../models/formulario-view-model';
import { Formulario } from '../models/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private db: AngularFirestore) { }

  private formularioCollectionName = 'formulario';

  saveCliente(formulario: Formulario): Promise<DocumentReference> {
    return this.db.collection(this.formularioCollectionName).add(formulario);
  }

}
