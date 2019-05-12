import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WsService {
  constructor(private socket: Socket) {}

  getMessage() {
    return this.socket.fromEvent('message').pipe(map((data: any) => data.msg));
  }
}
