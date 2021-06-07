# FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## get data from patientenData

response[0]["data"] = komplettes Array
						
response[0]["data"][0] = erste position im Array

response[0]["data"][0]["index"] = 0 -> Werte der position "index" des ersten Eintrags

response[0]["data"][0]["emotions"][0] = Emotions-array

response[0]["data"][0]["emotions"][0]["happy"] = 0.7 -> Wert der Position "happy" aus dem emotions-array aus dem ersten Eintrag im gesamten Daten-Array
