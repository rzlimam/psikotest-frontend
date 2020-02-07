import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest2/report';

  constructor(private http: HttpClient, private glob:GlobalService) { }

  public getReportCrPerPeckage() {
    return this.http.get(this.apiURL + '/report1/pdf', this.glob.getHeaderDownload());
  }

  public getReportFsPerPeckage() {
    return this.http.get(this.apiURL + '/report2/pdf', this.glob.getHeaderDownload());
  }

  public getMostCorrect() {
    return this.http.get(this.apiURL + '/report3/pdf', this.glob.getHeaderDownload());
  }

  public getMostWrong() {
    return this.http.get(this.apiURL + '/report4/pdf', this.glob.getHeaderDownload());
  }


  public geteasiestPackage() {
    return this.http.get(this.apiURL + '/report5/pdf', this.glob.getHeaderDownload());
  }


  public getMostDifficultPackage() {
    return this.http.get(this.apiURL + '/report6/pdf', this.glob.getHeaderDownload());
  }
}