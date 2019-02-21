import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  public myAppUrl: string = '';
  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getTeams() {
    return this._http.get(this.myAppUrl + 'api/Team/GetTeamList')
      .pipe(catchError(this.errorHandler));
  }

  getTotalVotes() {
    return this._http.get(this.myAppUrl + 'api/Team/TotalVotes')
      .pipe(catchError(this.errorHandler));

  }

  saveVotes(team) {
    return this._http.put(this.myAppUrl + 'api/Team/UpdateVoteCount', team)
      .pipe(catchError(this.errorHandler));

  }

  errorHandler(error: Response) {
    console.log(error);
    return throwError(error);
  }
}
