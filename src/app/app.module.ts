//Dependicias por default.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Dependecias agregadas.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Controladores
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './features/home/header/header.component';
import { FormularioComponent } from './features/formulario/formulario.component';
import { ModalComponent } from './features/formulario/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormularioComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
