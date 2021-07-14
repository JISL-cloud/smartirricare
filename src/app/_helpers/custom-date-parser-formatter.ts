import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
    readonly DELIMITER = '/';

    parse(value: string): NgbDateStruct {
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

    format(date: NgbDateStruct | null): string {
        return date ? date.month + this.DELIMITER + date.day + this.DELIMITER + date.year : '';
    }
}
