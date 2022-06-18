import { Component, Input, OnInit } from '@angular/core';
import { ExpertiseLevel } from '../../models/expertise.model';
import { ExpertiseClasses } from '../../const/expertises';

@Component({
    selector: 'app-level-badge',
    template: ` <span [class]="class" class="rounded-3xl text-white text-xs p-2">{{ level }}</span> `,
})
export class LevelBadgeComponent implements OnInit {
    @Input() level!: ExpertiseLevel;
    public class!: string;

    constructor() {}

    ngOnInit(): void {
        this.class = ExpertiseClasses.find((expertiseClass) => expertiseClass.level === this.level)!.className;
    }
}
