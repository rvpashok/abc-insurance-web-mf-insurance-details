import { Routes } from '@angular/router';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
export const routes: Routes = [
    {
        path:'', 
        component: InsuranceDetailsComponent
    },

    {
        path:"test",
        loadChildren: ()=> 
        loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4200/remoteEntry.js',
            exposedModule: './testModule'
        }).then(m => m.SharedModule)
    },
    // {
    //     path:"test1",
    //     loadChildren: ()=> 
    //     loadRemoteModule({
    //         type: 'script',
    //         remoteEntry: 'http://localhost:4200/remoteEntry.js',
    //     }).then(m => m.UserProfileResponse)
    // }



];
