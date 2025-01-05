import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterBarComponent } from "./footer-bar/footer-bar.component";
import { HeaderBarComponent } from "./header-bar/header-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterBarComponent, HeaderBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'abc-insurance-web-mf-insurance-details';
}
