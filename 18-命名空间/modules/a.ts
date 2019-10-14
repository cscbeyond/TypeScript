export namespace A {
    interface Animal {
        name: string;
        eat(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor (theName:string){
            this.name = name;
        }
        eat(){
            console.log(this.name + '吃狗粮');
        }
    }
    export class Cat implements Animal {
        name: string;
        constructor (theName:string){
            this.name = name;
        }
        eat(){
            console.log(this.name + '吃老鼠');
        }
    }
}

export namespace B {
    interface Animal {
        name: string;
        eat(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor (theName:string){
            this.name = name;
        }
        eat(){
            console.log(this.name + '吃狗粮');
        }
    }
    export class Cat implements Animal {
        name: string;
        constructor (theName:string){
            this.name = name;
        }
        eat(){
            console.log(this.name + '吃老鼠');
        }
    }
}