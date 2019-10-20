export class MessageModel {
    id:number ;
    name:string;
    age:number;
    designation: string;
    salary:number;
    constructor(private _id: number,private _name: string,private _age: number,private _designation: string,private _salary: number) {
        this.id = _id;
        this.name = _name;
        this.age = _age;
        this.designation = _designation;
        this.salary = _salary;
    }
}