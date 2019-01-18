import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'taskter-ui-layout';

  onDestroy$ = new Subject();
  userMenuOpen: boolean;
  navigationOpen: boolean;

  constructor(private layoutService: LayoutService) {
    this.layoutService
      .onUserProfileToggle()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(isOpen => (this.userMenuOpen = isOpen));

    this.layoutService
      .onNavigationToggle()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(isOpen => (this.navigationOpen = isOpen));
  }

  closeUserProfile() {
    this.layoutService.closeUserProfile();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
