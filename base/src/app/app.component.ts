import { Component, HostListener, OnInit } from '@angular/core';
import { NUIService } from './core/service/nui.service';
import { NUIMessage } from './core/interfaces/NUIMessage.interface';
import { NUIMessageTypes } from './core/enums/NUIMessageTypes.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isVisible: boolean = false;

  constructor(
    private nui: NUIService
  ) {}

  ngOnInit(): void {
    this.nui.incomingMessageHandler$.subscribe((message: NUIMessage) => {
      console.log('message.data.type: ', message.data.type);
      console.log(NUIMessageTypes.DisplayState);

      if(message.data.type === NUIMessageTypes.DisplayState) {
        console.log('DisplayState');
        console.log('visible: ', this.isVisible);
        this.isVisible = message.data.attributes.isVisible;        
        console.log('visible: ', this.isVisible);
      }
    });
  }

  @HostListener('window:keydown.Backspace', ['$event'])
  async handleBackspaceKeydown(event: KeyboardEvent) {
    const response = await this.nui.sendNUIMessage({ data : { type: NUIMessageTypes.DisplayState, attributes: { isVisible: false } } });
    console.log('Backspace keydown');
  }

  @HostListener('window:message', ['$event'])
  handleIncomingNUIMessage(event: any) {
    this.nui.handleIncomingMessage(event['data']);
  }
}
