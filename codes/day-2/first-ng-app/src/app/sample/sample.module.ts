import { NgModule } from "@angular/core";
import { SampleComponent } from "./sample.component";

@NgModule({
    declarations: [SampleComponent],
    providers: [],
    imports: [],
    bootstrap: [],
    exports: [SampleComponent]
})
export class SampleModule {
    constructor() {
        console.log('Sample module created')
    }
}