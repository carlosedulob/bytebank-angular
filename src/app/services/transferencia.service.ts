import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TransferenciaService {
  private listaDeTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private Httpclient: HttpClient) {
    this.listaDeTransferencia = [];
  }

  get transferencias() {
    return this.listaDeTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.Httpclient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);

    return this.Httpclient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
