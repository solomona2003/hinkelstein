import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CapturemainComponent } from './capturemain/capturemain.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CourselistComponent } from './courselist/courselist.component';
import { SigninComponent } from './capturemain/capture/auth/signin/signin.component';

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'courselist', component: CourselistComponent},
    {path: 'capturemain', component: CapturemainComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingMudule {}
