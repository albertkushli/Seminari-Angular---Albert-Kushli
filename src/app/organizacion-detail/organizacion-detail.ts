import { Component, OnInit, inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OrganizacionService } from '../services/organizacion.service';
import { UsuarioService } from '../services/usuario.service';
import { Organizacion } from '../models/organizacion.model';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-organizacion-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organizacion-detail.html',
  styleUrls: ['./organizacion-detail.css'],
})
export class OrganizacionDetail implements OnInit {
  organizacion: Organizacion | null = null;
  todosLosUsuarios: Usuario[] = [];
  loading = true;
  errorMsg = '';

  private platformId = inject(PLATFORM_ID);

  constructor(
    private route: ActivatedRoute,
    private api: OrganizacionService,
    private usuarioApi: UsuarioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.cargarOrganizacion(id);
        this.usuarioApi.getUsuarios().subscribe({
          next: (users) => {
            this.todosLosUsuarios = users;
            this.cdr.detectChanges();
          }
        });
      }
    }
  }

  cargarOrganizacion(id: string): void {
    this.api.getOrganizacionById(id).subscribe({
      next: (org) => {
        this.organizacion = org;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMsg = 'No se pudo cargar la organización';
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  get usuarios(): Usuario[] {
    return (this.organizacion?.usuarios ?? []) as Usuario[];
  }

  get usuariosDisponibles(): Usuario[] {
    const idsEnOrg = new Set(this.usuarios.map((u) => u._id));
    return this.todosLosUsuarios.filter((u) => !idsEnOrg.has(u._id));
  }

  agregar(userId: string): void {
    const orgId = this.organizacion!._id;
    this.api.addUsuarioToOrg(orgId, userId).subscribe({
      next: (org) => {
        this.organizacion = org;
        this.cdr.detectChanges();
      }
    });
  }

  eliminar(userId: string): void {
    const orgId = this.organizacion!._id;
    this.api.removeUsuarioFromOrg(orgId, userId).subscribe({
      next: (org) => {
        this.organizacion = org;
        this.cdr.detectChanges();
      }
    });
  }

  trackById(_index: number, item: any): string {
    return item._id;
  }
}