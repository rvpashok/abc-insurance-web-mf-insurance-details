import { Routes } from '@angular/router';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
export const routes: Routes = [
    {
        path:'', 
        component: InsuranceDetailsComponent
    },

    // {
    //     path:"test-route",
    //     loadChildren: ()=> 
    //     loadRemoteModule({
    //         type: 'module',
    //         remoteEntry: 'http://localhost:4200/remoteEntry.js',
    //         exposedModule: './testModule'
    //     }).then(m => m.SharedModule)
    // }



];
