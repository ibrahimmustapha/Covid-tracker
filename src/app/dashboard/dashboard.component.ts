import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  statistics: any;
  statsArray: any;

  ngOnInit(): void {
    this.getCovidStats();
  }

  constructor(private http: HttpClient) {}

  getCovidStats() {
    const url = 'https://covid-193.p.rapidapi.com/statistics';
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '3670434b68mshf9eef8ae6678c93p1c9920jsne43b3e9802c5',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    });
    this.http.get(url, { headers }).subscribe((response) => {
      this.statistics = response;
      this.statsArray = this.getRandomItems(this.statistics.response, 12);
      console.log(this.statistics.response);
    });
  }

  getRandomItems(items: any[], count: number): any[] {
    // Generate random indices
    const indices: any[] = [];
    while (indices.length < count) {
      const index = Math.floor(Math.random() * items.length);
      if (!indices.includes(index)) {
        indices.push(index);
      }
    }

    // Extract random items based on indices
    return indices.map((index) => items[index]);
  }
}
