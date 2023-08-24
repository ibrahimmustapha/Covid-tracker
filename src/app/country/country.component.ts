import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  id = '';
  countries: any[] = [];
  countryStats: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCountryStats();
  }

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  getCountryStats() {
    const url = 'https://covid-193.p.rapidapi.com/statistics';
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '3670434b68mshf9eef8ae6678c93p1c9920jsne43b3e9802c5',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    });
    this.http.get(url, { headers }).subscribe((data: any) => {
      this.countries = data.response;
      this.countryStats = this.countries.find(
        (country) => country.country === this.id
      );
      console.log(this.countryStats);
    });
  }
}
