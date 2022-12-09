import { Component } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit(){
    AOS.init();
  }
}