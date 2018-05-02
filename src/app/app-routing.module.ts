import { WelcomeComponent } from './courselist/welcome/welcome.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CourselistComponent } from './courselist/courselist.component';
import { CaptureComponent } from './capture/capture.component';

const routes: Routes = [
    {path: '', component: CourselistComponent},
    {path: 'courselist', component: CourselistComponent},
    {path: 'capture', component: CaptureComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingMudule {}
