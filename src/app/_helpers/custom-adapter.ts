import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
    readonly DELIMITER = '/';

    fromModel(value: string): NgbDateStruct {
        if (value) {
            const date = value.split(this.DELIMITER);
            return {
                year: parseInt(date[2], 10),
                month: parseInt(date[0], 10),
                day: parseInt(date[1], 10),
            };
        }
        return null as any;
    }
    toModel(date: NgbDateStruct): string {
        return date
            ? date.month + this.DELIMITER + date.day + this.DELIMITER + date.year
            : (null as any);
    }
}
