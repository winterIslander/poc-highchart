import { Component, OnInit } from '@angular/core';
import { TeamData } from 'src/app/models/team-data';
import { TeamService } from 'src/app/services/team.service';
import { HttpClient } from '@angular/common/http';
import { Observable, zip, forkJoin } from 'rxjs';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public resultList: TeamData[];
  public chart: any;
  public totalVotes: number;
  
  ngOnInit() {
  }


  constructor(public http: HttpClient, private _teamService: TeamService) {

    let votes = this._teamService.getTotalVotes();
    let teams = this._teamService.getTeams();

    forkJoin([votes, teams]).subscribe(results => {
      this.totalVotes = results[0] as number;
      this.resultList = results[1] as TeamData[];
      
      for (let i = 0; i < this.resultList.length; i++) {
        this.resultList[i].voteShare = (((this.resultList[i].voteCount) / this.totalVotes) * 100);
    }

    this.createCharts();
    });
  }

  createCharts() {
      this.chart = new Chart({
          chart: {
              type: 'column'
          },
          title: {
              text: 'Vote share for each team'
          },
          xAxis: {
              type: 'category',
              labels: {
                  rotation: -45,
                  style: {
                      fontSize: '13px',
                      fontFamily: 'Verdana, sans-serif'
                  }
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Percentage of Votes'
              }
          },
          legend: {
              enabled: false
          },
          tooltip: {
              pointFormat: 'Vote: <b>{point.y:.2f} %</b>'
          },

          series: [{
              type: 'column',
              data: [
                  { name: this.resultList[0].teamName, y: this.resultList[0].voteShare, color: 'rgba(253, 185, 19, 0.85)' },
                  { name: this.resultList[1].teamName, y: this.resultList[1].voteShare, color: 'rgba(0, 76, 147, 0.85)' },
                  { name: this.resultList[2].teamName, y: this.resultList[2].voteShare, color: 'rgba(170, 69, 69, 0.85)' },
                  { name: this.resultList[3].teamName, y: this.resultList[3].voteShare, color: 'rgba(112, 69, 143, 0.85)' },
                  { name: this.resultList[4].teamName, y: this.resultList[4].voteShare, color: 'rgba(0, 93, 160, 0.85)' },
                  { name: this.resultList[5].teamName, y: this.resultList[5].voteShare, color: 'rgba(45, 77, 157, 0.85)' },
                  { name: this.resultList[6].teamName, y: this.resultList[6].voteShare, color: 'rgba(0, 0, 0, 0.85)' },
                  { name: this.resultList[7].teamName, y: this.resultList[7].voteShare, color: 'rgba(251, 100, 62, 0.85)' }
              ],
          }]

      });

  }
}
