/// <reference path="../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Promise from 'native-promise-only';
import * as ClassList from 'classlist-polyfill';
import * as URL from 'url-polyfill';

import {TestComponent} from './test';
import {StatsComponent} from './stats';
import {VideoRollComponent} from './video-roll';
import {PersistentButton} from './persistent-button';
import {SelectOnFocus} from './select-on-focus';
import {LoaderLogo} from './loader-logo';
import {EventEmitter} from './event-emitter';
import {BFTNFormFlow} from './bftn-form-flow';
import {mountComponent} from './utils';
import {ExternalFlags} from './external-flags';
import {GoogleAnalytics} from './google-analytics';

declare var window: any;

window['_promise'] = Promise;
window['_classlist'] = ClassList;
window['_url'] = URL;
window['React'] = React;
window['ReactDOM'] = ReactDOM;
window['TestComponent'] = TestComponent;
window['StatsComponent'] = StatsComponent;
window['VideoRollComponent'] = VideoRollComponent;
window['PersistentButton'] = PersistentButton;
window['SelectOnFocus'] = SelectOnFocus;
window['LoaderLogo'] = LoaderLogo;
window['EventEmitter'] = EventEmitter;
window['BFTNFormFlow'] = BFTNFormFlow;
window['mountComponent'] = mountComponent;
window['ExternalFlags'] = ExternalFlags;
window['GoogleAnalytics'] = GoogleAnalytics;