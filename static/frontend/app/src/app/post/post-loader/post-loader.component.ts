import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-post-loader',
  standalone: true,
  templateUrl: './post-loader.component.html',
  styleUrls: ['./post-loader.component.scss'],
  imports: [CommonModule, MatCardModule, MatCardTitle, MatCardContent]
})
export class PostLoaderComponent implements OnInit {
  @Input() detail: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
