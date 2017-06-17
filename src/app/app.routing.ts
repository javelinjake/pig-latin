import { Routes, RouterModule } from '@angular/router';

import { PigLatinComponent } from './pig-latin/index';

const appRoutes: Routes = [
    { path: '', component: PigLatinComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
