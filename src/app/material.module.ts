import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatIconModule, MatMenuModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule, MatDialogModule
} from '@angular/material';
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatMenuModule,
                MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule,
                MatDialogModule],
    exports: [MatButtonModule, MatIconModule, MatMenuModule,
                MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule,
                MatDialogModule]
})

export class MaterailModule { }
