import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-setttings',
  templateUrl: './setttings.component.html',
  styleUrls: ['./setttings.component.scss'],
  imports: [CommonModule]
})
export class SetttingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
