import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
  ) {}

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getCrisis(params.get('id'));
      }),
    );
  }

  gotoCrises(crisis: Crisis) {
    const crisisId: number = crisis ? crisis.id : undefined;
    this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
  }
}
