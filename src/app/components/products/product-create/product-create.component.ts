import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = { name: '', price: null!}

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
   
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operaction Executed with Success!')
      this.router.navigate(['/products'])
    })

  }

  cancelProduct(): void {
    this.productService.showMessage('Canceled Product!')
    this.router.navigate(['/products'])
  }

}
