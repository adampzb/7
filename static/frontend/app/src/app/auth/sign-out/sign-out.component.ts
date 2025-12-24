import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sign-out',
  standalone: true,
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class SignOutComponent implements OnInit {
  fragment: string;
  context: any;

  redirection = {
    'delete' : {
      title: 'You will be missed ;(',
      subtitle: `Your account shall be permanently deleted in 14 days.
        If you change your mind, please send us a request mail at admin@gmail.com
        and we shall set-up everything just like it was before.. `
    },
    'deactivate' : {
      title: 'You will be missed ;(',
      subtitle: `Whenever you wish to reactivate your account,
      please send us a request mail at admin@gmail.com and we shall set-up
      everything just like it was before.`
    }
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string) => {
        this.fragment = fragment;
        this.context = this.redirection[this.fragment]
    })

    setTimeout(() => {
      window.open(`${environment.appUrl}`, '_self')
    }, 3000);
  }
}
