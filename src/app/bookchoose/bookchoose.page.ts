import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookchoose',
  templateUrl: './bookchoose.page.html',
  styleUrls: ['./bookchoose.page.scss'],
})
export class BookchoosePage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }


  onbookplace(){
    this.router.navigate(['/bookplace']);
  }


}
