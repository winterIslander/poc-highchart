import { Component, OnInit } from '@angular/core';
import { TeamData } from 'src/app/models/team-data';
import {HttpClient } from '@angular/common/http'
import { TeamService } from 'src/app/services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

  ngOnInit() {
  }

  public teamList: TeamData[];

  constructor(public http: HttpClient, private _teamService: TeamService, private _router: Router) {
      this.getTeamList();
  }

  getTeamList() {
      this._teamService.getTeams().subscribe(
          (data: TeamData[]) => this.teamList = data
      )
  }

  save(team) {

      this._teamService.saveVotes(team)
          .subscribe((data) => {
              this._router.navigate(['/results']);
          })
  }
}
