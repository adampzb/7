import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-loader',
  standalone: true,
  templateUrl: './post-loader.component.html',
  styleUrls: ['./post-loader.component.scss'],
  imports: [CommonModule]
})
export class PostLoaderComponent implements OnInit {
  @Input() detail: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
