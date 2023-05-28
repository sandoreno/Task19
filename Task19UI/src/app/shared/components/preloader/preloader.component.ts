import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader-comp',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  loader = true;
  ngOnInit(): void {
    let t = this;
    setTimeout(() => {
      t.loader = false;
    }, 5000);
  }
}
