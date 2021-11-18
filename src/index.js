const React = require("react");
const ReactDOM = require("react-dom");


const element = <h1>Hello world</h1>
console.log(element);

ReactDOM.render(element, document.getElementById("root"))

class Person{
    constructor(name)
    {
        this.name=name;
    }
}

class Teacher{
    constructor(name,degree)
    {
        super(name);
        this.degree=degree;
    }
}