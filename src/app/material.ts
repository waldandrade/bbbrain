import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
   imports: [MatToolbarModule, MatSidenavModule, MatButtonModule, MatListModule, MatIconModule],
   exports: [MatToolbarModule, MatSidenavModule, MatButtonModule, MatListModule, MatIconModule]
})
export class MaterialModule {}