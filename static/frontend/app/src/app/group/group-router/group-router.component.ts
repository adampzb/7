import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  
  selector: 'app-group-router',
  standalone: true,
  templateUrl: './group-router.component.html',
  styleUrls: ['./group-router.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class GroupRouterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
