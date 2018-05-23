import { CanActivate } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { PresetComponent } from './capture/preset/preset.component';
import { StreamcontrolComponent } from './capture/streamcontrol/streamcontrol.component';
import { PreviewsComponent } from './capture/previews/previews.component';
import { AdhocmodalComponent } from './courselist/adhocmodal/adhocmodal.component';
import { CoursedetailComponent } from './courselist/coursedetail/coursedetail.component';
import { WelcomeComponent } from './courselist/welcome/welcome.component';
import { NgModule, ContentChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourselistComponent } from './courselist/courselist.component';
import { CaptureComponent } from './capture/capture.component';
import { TimerComponent } from './capture/timer/timer.component';


const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full'},

    { path: 'home', component: CourselistComponent, children: [
        { path: '', component: WelcomeComponent},
        { path: ':id', component: CoursedetailComponent},
    ]
    },

    { path: 'capture', component: CaptureComponent, canActivate: [AuthGuard] },



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingMudule { }
