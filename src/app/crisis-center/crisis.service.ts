import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable()
export class CrisisService {
  constructor(private messageService: MessageService) {}

  getCrises(): Observable<Crisis[]> {
    this.messageService.add('CrisisService: fetched heroes');
    return of(CRISES);
  }

  getCrisis(id: string): Crisis {
    return CRISES.find((val: Crisis) => {
      return val.id === +id;
    });
  }
}
