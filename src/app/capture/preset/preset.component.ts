import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.css']
})
export class PresetComponent implements OnInit {
 items: any[];
  constructor() {

    this.items = [
    {URL: '../../assets/1.png'},
    {URL: '../../assets/2.png'},
    {URL: '../../assets/3.png'},
    {URL: '../../assets/4.png'},
    {URL: '../../assets/1.png'},
    {URL: '../../assets/2.png'},
    {URL: '../../assets/3.png'},
    {URL: '../../assets/4.png'},
    {URL: '../../assets/1.png'},
    {URL: '../../assets/2.png'},
    {URL: '../../assets/3.png'},
    {URL: '../../assets/4.png'},
    {URL: '../../assets/1.png'},
    {URL: '../../assets/2.png'},
    {URL: '../../assets/3.png'},
    {URL: '../../assets/4.png'},
    {URL: '../../assets/1.png'},
    {URL: '../../assets/2.png'},
    {URL: '../../assets/3.png'},
    {URL: '../../assets/4.png'},
  ];
}

 

  ngOnInit() {
   
  }

}
