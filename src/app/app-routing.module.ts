import { AdhocmodalComponent } from './courselist/adhocmodal/adhocmodal.component';
import { CoursedetailComponent } from './courselist/coursedetail/coursedetail.component';
import { WelcomeComponent } from './courselist/welcome/welcome.component';
import { NgModule, ContentChildren } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CourselistComponent } from './courselist/courselist.component';
import { CaptureComponent } from './capture/capture.component';
import { TimetableComponent } from './courselist/timetable/timetable.component';

const routes: Routes = [
    {path: '', component: CourselistComponent},
    {path: 'courselist', component: CourselistComponent, children: [
        { path: 'timetable', component: TimetableComponent, outlet: 'left' },
        { path: 'welcome', component: WelcomeComponent, outlet: 'right' },
        { path: 'coursedetail', component: CoursedetailComponent, outlet: 'right' },
        { path: 'adhoc', component: AdhocmodalComponent, outlet: 'right' },
    ] },
    {path: 'capture', component: CaptureComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingMudule {}
