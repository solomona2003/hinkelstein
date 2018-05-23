import { CourselistsComponent } from './courselist/mycourselit/courselists.component';
import { CourseItemComponent } from './courselist/mycourselit/mycourse/courseitem.component';
import { CourseeditmodalComponent } from './courselist/coursedetail/courseeditmodal/courseeditmodal.component';
import { UIService } from './shared/ui-features.service';
import { AuthService } from './authentication/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StreamcontrolComponent } from './capture/streamcontrol/streamcontrol.component';
import { AdhocmodalComponent } from './courselist/adhocmodal/adhocmodal.component';
import { LeftsliderComponent } from './leftslider/leftslider.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MaterailModule} from './material.module';
import { CourselistComponent } from './courselist/courselist.component';
import { AppRoutingMudule } from './app-routing.module';
import { WelcomeComponent } from './courselist/welcome/welcome.component';
import { CaptureComponent } from './capture/capture.component';
import { TimerComponent } from './capture/timer/timer.component';
import { PresetComponent } from './capture/preset/preset.component';
import { SinglestreamcontrolComponent } from './capture/singlestreamcontrol/singlestreamcontrol.component';
import { DoublestreamcontrolComponent } from './capture/doublestreamcontrol/doublestreamcontrol.component';
import { PreviewsComponent } from './capture/previews/previews.component';
import { PtzcontrolmodalComponent } from './capture/ptzcontrolmodal/ptzcontrolmodal.component';
import { CoursedetailComponent } from './courselist/coursedetail/coursedetail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CourseDetailSerivce } from './courselist/coursedetail/coursedetail.service';
import { UserService } from './authentication/user.service';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CourselistsComponent,
    CourseItemComponent,
    LeftsliderComponent,
    AdhocmodalComponent,
    CaptureComponent,
    TimerComponent,
    PresetComponent,
    SinglestreamcontrolComponent,
    DoublestreamcontrolComponent,
    PreviewsComponent,
    CourselistComponent,
    PtzcontrolmodalComponent,
    CoursedetailComponent,
    CourseeditmodalComponent,
    StreamcontrolComponent,
    PreviewsComponent,
    AuthenticationComponent,
    PtzcontrolmodalComponent,
    AdhocmodalComponent
  ],

  entryComponents: [CourseeditmodalComponent, PtzcontrolmodalComponent, AdhocmodalComponent],

  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterailModule,
    AppRoutingMudule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthService, UIService, CourseDetailSerivce, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
