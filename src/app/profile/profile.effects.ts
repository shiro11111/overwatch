import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProfileService } from './profile.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CompleteStats } from '../models/completeStats';
import { LoadProfileInfoFail, LoadProfileInfoSuccess } from './profile.actions';
import { of } from 'rxjs';

@Injectable()
export class ProfileEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private service: ProfileService
  ) {
  }

  @Effect() loadInfo$ = this.actions$.pipe(
    ofType('LOAD_PROFILE_INFO'),
    switchMap(() => this.service.loadInfo('battlenet', 'Europe', 'ghostdragon').pipe(
      map((res: CompleteStats) => (new LoadProfileInfoSuccess(res))),
      catchError((error: HttpErrorResponse) => of(new LoadProfileInfoFail(error)))
    ))
  );
}

