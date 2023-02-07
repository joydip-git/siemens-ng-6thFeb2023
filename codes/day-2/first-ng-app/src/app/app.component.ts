import { Component } from "@angular/core";

@Component({
    selector: 'app-main',
    template: `
    <h2>
        Welcome to Angular
        <br>
        <app-sample></app-sample>
    </h2>
    `
})
export class AppComponent {
    constructor() {
        console.log('App component created')
    }
}