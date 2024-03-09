import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private dataService: DataService) {}
  data: any[] = [];
  val: any = {
    userName: 'teszt2diak',
  };

  onClick() {
    this.dataService.selectAll('student').subscribe((res) => {
      console.log(res);
    });

    this.dataService.select('student', 'id', '1').subscribe((res) => {
      console.log(res);
    });

    this.dataService.update('student', '2', this.val).subscribe(() => {
      this.dataService.select('student', 'id', '2').subscribe((res) => {
        this.data = res;
        console.log(this.data);
      });
    });
  }
  title = 'angular-app';
}
