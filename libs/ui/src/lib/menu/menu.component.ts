import { Component, Input, OnInit } from '@angular/core';

export interface MenuItem {
  url: string;
  label; string;
}

@Component({
  selector: 'pacto-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {}

}
