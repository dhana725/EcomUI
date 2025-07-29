import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./MainComponent/home/home.component";
import { SidebarComponent } from "./MainComponent/sidebar/sidebar.component";
import { NavbarComponent } from "./MainComponent/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, SidebarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce';
}
