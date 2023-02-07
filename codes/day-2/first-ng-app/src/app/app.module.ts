import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SampleComponent } from "./sample/sample.component";
import { SampleModule } from "./sample/sample.module";

@NgModule({
    declarations: [AppComponent],
    providers: [],
    imports: [BrowserModule, SampleModule],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('App module created')
    }
}