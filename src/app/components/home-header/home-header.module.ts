import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HomeHeaderComponent],
    exports: [HomeHeaderComponent],
    imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, MatTooltipModule, RouterModule],
})
export class HomeHeaderModule {}
