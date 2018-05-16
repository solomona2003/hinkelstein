import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatIconModule, MatMenuModule,
    MatToolbarModule, MatSidenavModule, MatListModule,
     MatCardModule, MatDialogModule, MatStepperModule,
      MatFormFieldModule, MatInputModule,
       MatCheckboxModule, MatChipsModule, MatSelectModule, MatTableModule, MatTabsModule
} from '@angular/material';
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatMenuModule,
                MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule,
                MatDialogModule, MatStepperModule, MatFormFieldModule,
                 MatInputModule, MatCheckboxModule, MatChipsModule,
                  MatSelectModule, MatTableModule, MatTabsModule ],

    exports: [MatButtonModule, MatIconModule, MatMenuModule,
                MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule,
                MatDialogModule, MatStepperModule, MatFormFieldModule,
                 MatInputModule, MatCheckboxModule, MatChipsModule, MatSelectModule, MatTableModule, MatTabsModule ]
})

export class MaterailModule { }
