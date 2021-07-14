import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { fontAwesomeBrandsIcons } from './icons.font-awesome-brands';
import { fontAwesomeRegularIcons } from './icons.font-awesome-regular';
import { fontAwesomeSolidIcons } from './icons.font-awesome-solid';

@NgModule({
    exports: [FontAwesomeModule],
})
export class IconsModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(
            fontAwesomeSolidIcons,
            fontAwesomeRegularIcons,
            fontAwesomeBrandsIcons
        );
    }
}
