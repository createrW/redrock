// 1
let obj=new Object()
obj.name="Bob";
obj.age=18;
// 2
let obj={
    name:"Bob",
    age:18
}
// 3
function CreateObj(name,age){
    this.name=name;
    this.age=age
}
let obj=new CreateObj('Bob',18);
// 4  工厂模式
function CreateObj2(name,obj){
    const obj2={}
    obj2.name=name;
    obj2.age=age;
    return obj2;
}
const obj3=CreateObj2('Bob',18);
// 5 use prototype
function person(){
person.prototype.name='Bob';
person.prototype.age=18;
}
let Person=new person();