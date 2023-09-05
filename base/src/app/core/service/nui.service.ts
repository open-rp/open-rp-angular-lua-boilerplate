import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NUIMessage } from '../interfaces/NUIMessage.interface';

@Injectable({
  providedIn: 'root'
})
export class NUIService {

  public incomingMessageHandler$: Subject<any> = new Subject<any>();
  private resourceName: string = (window as any).GetParentResourceName ? (window as any).GetParentResourceName() : "nui-app";

  constructor(
    private http: HttpClient
  ) { }

  handleIncomingMessage(message: NUIMessage) {
    this.incomingMessageHandler$.next(message);
  }

  async sendNUIMessage(message: NUIMessage) {
    await this.http.post(`https://${this.resourceName}/callback`, message).toPromise();
  }
}
