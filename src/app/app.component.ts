import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isCollapsed = false;
  activeRoute = '';

  menuItems = [
    { title: 'ISSFA', route: '/issfa' },
    { title: 'Inmobiliaria', route: '/inmobiliaria' },
    { title: 'Banco Produbanco', route: '/produbanco' },
    { title: 'Banco Pichincha', route: null } // Este no tiene ruta
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.activeRoute = this.router.url; // Captura la ruta activa al iniciar
  }

  setActive(route: string | null) {
    this.activeRoute = route ?? '';
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  irWelcome() {
    this.router.navigate(['/welcome']);
  }
}
