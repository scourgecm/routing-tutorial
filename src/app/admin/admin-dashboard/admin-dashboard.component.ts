import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { SelectivePreloadingStrategyService } from '../../selective-preloading-strategy.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];

  constructor(
    private route: ActivatedRoute,
    public preloadStrategy: SelectivePreloadingStrategyService,
  ) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    this.sessionId = this.route.queryParamMap.pipe(
      map((params: ParamMap) => {
        return params.get('session_id') || 'None';
      }),
    );

    this.sessionId = this.route.fragment.pipe(
      map((fragment: string) => {
        return fragment || 'None';
      }),
    );
  }
}
