﻿import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styles: [ String(require('../assets/styles/app.scss')) ],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent { }
