import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MaterailModule} from './material.module';
import { CourselistComponent } from './courselist/courselist.component';
import { CapturemainComponent } from './capturemain/capturemain.component';
import { SigninComponent } from './capturemain/capture/auth/signin/signin.component';
import { DiclaimerComponent } from './capturemain/capture/diclaimer/diclaimer.component';
import { FooterComponent } from './capturemain/capture/footer/footer.component';
import { HeaderComponent } from './capturemain/capture/header/header.component';
import { RecordtimerComponent } from './capturemain/capture/recordtimer/recordtimer.component';
import { PresetsComponent } from './capturemain/capture/presets/presets.component';
import { CoursedetailComponent } from './capturemain/capture/coursedetail/coursedetail.component';
import { CameracontrolComponent } from './capturemain/capture/cameracontrol/cameracontrol.component';
import { AvComponent } from './capturemain/capture/av/av.component';
import { StreamcontrolComponent } from './capturemain/capture/streamcontrol/streamcontrol.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingMudule } from './app-routing.module';
import { ManagementComponent } from './management/management.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DiclaimerComponent,
    FooterComponent,
    HeaderComponent,
    RecordtimerComponent,
    PresetsComponent,
    CourselistComponent,
    CoursedetailComponent,
    CameracontrolComponent,
    AvComponent,
    StreamcontrolComponent,
    CapturemainComponent,
    WelcomeComponent,
    ManagementComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterailModule,
    AppRoutingMudule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
