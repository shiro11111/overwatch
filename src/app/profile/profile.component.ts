import { Component, OnInit } from '@angular/core';
import { CompleteStats } from '../models/completeStats';
import { Observable } from 'rxjs';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { LoadProfileInfo } from './profile.actions';
import { map } from 'rxjs/operators';
import { ProfileState } from './profile.reducers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  info$: Observable<CompleteStats>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadProfileInfo());

    this.info$ = this.store.select('profileState').pipe(
     map((state: ProfileState) => state && state.info));
  }

}
