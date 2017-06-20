/// <reference path="../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as moment from 'moment';


export interface ajaxRequest {
	url: string
	method: string
	body?: string
	obj?: any
	json?: boolean
	cors?: boolean
}


export interface ajaxResult {
	code: number
	response: any
	xhr?: any
	json?: any
}


export function mockAjaxPromise(result: any, timeout: number): Promise<ajaxResult> {
	return new Promise((resolve, reject) => {
		window.setTimeout(function() {
			resolve(result);
		}, timeout);
	});
};


function encodeObject(obj: {[key: string]: any}): string {
	var pairs = Object.keys(obj).map(function(k) {
		return encodeURIComponent(k as string) + '=' + encodeURIComponent(obj[k] as string);
	});
	return pairs.join('&').replace(/%20/g, '+');
};


export function ajaxPromise(opts: any)  {
	var cors = (typeof opts.cors !== 'undefined') ? opts.cors : true;
	var json = (typeof opts.json !== 'undefined') ? opts.json : false;
	var spec: any = {
		url: opts.url,
		method: opts.method.toUpperCase()
	};
	if (cors) {
		spec['mode'] = 'cors';
	}
	if (opts.obj) {
		spec['body'] = encodeObject(opts.obj);
		spec['headers'] = {
			'Content-Type': 'application/x-www-form-urlencoded'
		};
	} else {
		spec['body'] = opts.body;
	}
	return fetch(
		opts.url, spec
	).then(function(response) {
		console.log(response);
		return response;
	});
};


export function getScrollTop() {
	return window.scrollY || document.documentElement.scrollTop;
};


export function handleInputChange(evt: React.FormEvent) {
	const target = evt.target as HTMLInputElement;
	const val = target.type === 'checkbox' ? target.checked : target.value;
	const name = target.name;
	var data:any = {};
	data[name] = val;
	this.setState(data);
};


export function mountComponent(el: React.ReactElement<any>, target: any) {
	ReactDOM.render(el, target);
};


export function clamp(v: number, l: number): number {
	while (v < 0) {
		v = v + l;
	}
	return v % l;
};


export function classes(...c: (string|boolean|null)[]): string {
	return c.filter((val: string|boolean|null) => { return val; }).join(" ");
};


function dateToArray(d: Date): [number, number, number] {
	return [d.getFullYear(), d.getMonth(), d.getDate()];
}


export function daysUntil(d: Date): number {
	const momentd = moment(dateToArray(d));
	const now = moment(dateToArray(new Date()));
	return momentd.diff(now, 'days');
};
