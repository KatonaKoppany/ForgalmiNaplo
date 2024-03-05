import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}

  data: any[] = [];
  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(): void {
    this.dataService.getAllData().subscribe((data) => {
      this.data = data;
      console.log(data[0]);
    });
  }
  title = 'angular-app';
}
