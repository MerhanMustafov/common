// let decimal: number = 5;
// let message: string = '';
// let messages: string[] = ['msg 1', 'msg 2'];

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

class HttpData {
    
    public response: undefined;
    public fulfilled: false;

    constructor(public method: string, public uri: string, public version: string, public message: string ){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response;
        this.fulfilled;

    }


}

let myData = new HttpData('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData)
export {};

export {};
