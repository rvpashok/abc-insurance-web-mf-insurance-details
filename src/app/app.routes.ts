import { Routes } from '@angular/router';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { AboutusComponent } from './footer-bar/aboutus/aboutus.component';
import { ContactUsComponent } from './footer-bar/contact-us/contact-us.component';
import { CareersComponent } from './footer-bar/careers/careers.component';
import { PressReleaseComponent } from './footer-bar/press-release/press-release.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ClaimsComponent } from './claims/claims.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: "insurance", component:InsuranceDetailsComponent, canActivate: [AuthGuard]},
    {path:'about-us',component:AboutusComponent, canActivate: [AuthGuard]},
    {path:'contact-us',component:ContactUsComponent},
    {path:'careers',component:CareersComponent},
    {path:'press-release',component:PressReleaseComponent},
    {path:'claims',component:ClaimsComponent},
    {path:'profile',component:ProfileComponent},
    {path:'insurance', component: InsuranceDetailsComponent}
];
