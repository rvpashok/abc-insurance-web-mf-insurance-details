import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InsuranceDetailsModule } from './insurance-details/insurance-details.module';
//import { SharedModule } from 'shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InsuranceDetailsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'abc-insurance-web-mf-insurance-details';
}
