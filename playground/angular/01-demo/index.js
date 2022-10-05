"use strict";
// let decimal: number = 5;
// let message: string = '';
// let messages: string[] = ['msg 1', 'msg 2'];
exports.__esModule = true;
// class User {
//     private name: string
//     constructor(name: string) {
//         this.name = name;
//     }
//     sayHello(){
//         return `${this.name} says hi !`;
//     }
// }
// const user = new User('Jhon');
// console.log(user.sayHello())
var HttpData = /** @class */ (function () {
    function HttpData(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response;
        this.fulfilled;
    }
    return HttpData;
}());
var myData = new HttpData('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
