import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menuadmin',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './menuadmin.component.html',
  styleUrl: './menuadmin.component.css'
})
export class MenuadminComponent implements OnInit  {

  constructor(
    private router: Router
  ) {

  }
  
  ngOnInit(): void {
  }

  cerrarSesion() {
    localStorage.clear();
    window.location.href = 'http://localhost:4200/';
  }
  
}
