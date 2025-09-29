import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
