import { MatFormFieldModule } from '@angular/material/form-field';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  standalone: true,
  selector: 'app-checkout',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

}
