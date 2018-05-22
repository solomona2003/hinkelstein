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
import { TimetableComponent } from './courselist/timetable/timetable.component';
import { TimerComponent } from './capture/timer/timer.component';
import { MycourseComponent } from './courselist/mycourse/mycourse.component';

const routes: Routes = [
    { path: '', component: CourselistComponent },
    { path: 'capture', component: CaptureComponent, canActivate: [AuthGuard] },

    {
        path: 'courselist', component: CourselistComponent, children: [

            // welcome page
            { path: 'timetable', component: TimetableComponent, outlet: 'left' },
            { path: 'welcome', component: WelcomeComponent, outlet: 'right' },

            // my course page
            { path: 'mycourse', component: MycourseComponent, outlet: 'left', canActivate: [AuthGuard] },
            { path: 'coursedetail', component: CoursedetailComponent, outlet: 'right', canActivate: [AuthGuard] },

            // ad hoc modal
            { path: 'adhoc', component: AdhocmodalComponent },

        ], canActivate: [AuthGuard]
    },

    {
        path: 'capture', component: CaptureComponent, children: [
            { path: 'preview', component: PreviewsComponent, outlet: 'topleft' },
            { path: 'streamcontrol', component: StreamcontrolComponent, outlet: 'topright' },
            { path: 'preset', component: PresetComponent, outlet: 'bottomleft' },
            { path: 'timer', component: TimerComponent, outlet: 'bottomright' },

        ], canActivate: [AuthGuard]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingMudule { }
