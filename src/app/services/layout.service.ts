import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private userProfileOpened$ = new BehaviorSubject<boolean>(false);
  private navigationMenuOpened$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  onNavigationToggle(): Observable<boolean> {
    return this.navigationMenuOpened$.asObservable();
  }

  navigationToggle() {
    this.navigationMenuOpened$.next(!this.navigationMenuOpened$.value);
  }

  onUserProfileToggle(): Observable<boolean> {
    return this.userProfileOpened$.asObservable();
  }

  openUserProfile() {
    this.userProfileOpened$.next(true);
  }

  closeUserProfile() {
    this.userProfileOpened$.next(false);
  }
}
