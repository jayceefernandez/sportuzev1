import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookplace',
  templateUrl: './bookplace.page.html',
  styleUrls: ['./bookplace.page.scss'],
})
export class BookplacePage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }


  onbooktime(){
    this.router.navigate(['/booktimeinfo']);
  }


}
