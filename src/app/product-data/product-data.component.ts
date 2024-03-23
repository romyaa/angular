import { Component, Input, input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, Routes } from '@angular/router';

@Component({
  selector: 'app-product-data',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css',
})
export class ProductDataComponent {
  @Input() prod_data: any;

  constructor(private router: Router) {}

  Redirection(Game_id: string) {
    this.router.navigate([`/details/${Game_id}`]);
  }
}
