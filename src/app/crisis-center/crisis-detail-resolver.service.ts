import { Injectable } from '@angular/core';
import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';
import { Observable } from 'rxjs/Observable';
import { take, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

@Injectable()
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private router: Router, private service: CrisisService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Crisis> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.service.getCrisis(id).pipe(
      take(1),
      mergeMap((crisis: Crisis) => {
        if (crisis) {
          return of(crisis);
        } else {
          this.router.navigate(['/crisis-center']);
          return empty();
        }
      }),
    );
  }
}
