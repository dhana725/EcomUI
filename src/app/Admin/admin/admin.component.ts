import { Component } from '@angular/core';
import { AdminnavbarComponent } from "../adminnavbar/adminnavbar.component";
import { AdminsidebarComponent } from "../adminsidebar/adminsidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [AdminnavbarComponent, AdminsidebarComponent,RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
