import { PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

console.log('main code being executed')
const platform: PlatformRef = platformBrowserDynamic()


platform
    .bootstrapModule(AppModule)
    .catch(
        function (e) {
            console.log(e)
        }
    )
