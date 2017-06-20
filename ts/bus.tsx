/// <reference path="../typings/index.d.ts" />

export class Bus {
	subscribers: any[];
	constructor() {
		this.subscribers = [];
	}
	push(val:any) {
		this.subscribers.forEach(function(cb) {
			cb(val);
		});
	}
	subscribe(cb: (val:any)=>void) {
		this.subscribers.push(cb);
		return () => {
            this.subscribers = this.subscribers.filter(fn => {
              return fn !== cb;
            });
		};
	}
}
