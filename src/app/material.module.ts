import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatIconModule, MatMenuModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule
} from '@angular/material';
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatMenuModule,
                MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule],
    exports: [MatButtonModule, MatIconModule, MatMenuModule,
                MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule]
})

export class MaterailModule { }
