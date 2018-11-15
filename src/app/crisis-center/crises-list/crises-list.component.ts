import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/observable';
import { switchMap } from 'rxjs/operators';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crises-list',
  templateUrl: 'crises-list.component.html',
  styleUrls: ['crises-list.component.css'],
})
export class CrisesListComponent implements OnInit {
  selectedCrisis: Crisis;

  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private service: CrisisService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getCrisises();
  }

  onSelect(crisis: Crisis): void {
    this.router.navigate(['./', crisis.id], { relativeTo: this.route });
  }

  getCrisises(): void {
    this.crises$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      }),
    );
  }
}
