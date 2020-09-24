/*
 - TypeScript es un superconjunto tipado de JavaScript que se compila en JavaScript simple.
 - TypeScript puede ayudar a los programadores a escribir programas orientados a objetos y compilarlos en JavaScript, en el lado del servidor como en el del cliente.
 - TypeScript es orientado a objetos puros con clases, interfaces y estáticamente tipado como Java.
*/

/*
Un programa TypeScript está compuesto de:
- Modules
- Functions
- Objects and Classes
- Variables
- Statements and Expressions
- Comments
*/

/*
Identificadores válidos:
- firstName
- first_name
- num1
- $result

Identificadores inválidos:
- first name
- first-name
- 1number
- Var
*/

// Clases y Métodos
class Greeting {
    greet():void {
        console.log("Hello World!!!")
    }
}

var obj = new Greeting();
obj.greet();

/*
Tipos:
 - Any type: Denota un tipo dinámico. Usar cualquier tipo es equivalente a optar por no verificar el tipo para una variable.
 - Built-in types: number, string, boolean, void, null, undefined
 - User-defined Types: include Enumerations (enums), classes, interfaces, arrays, and tuple.
*/

// Variables
var nombre:string = "John";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2
console.log("name: "+nombre)
console.log("first score: "+score1)
console.log("second score: "+score2)
console.log("sum of the scores: "+sum)

// Alcance de variables
var global_num = 12 //global variable
class Numbers {
    num_val = 13; //class variable
    static sval = 10; //static field

    storeNum():void {
        var local_num = 14; //local variable
    }
}
console.log("Global val: "+global_num)
console.log("Static val: "+Numbers.sval)
console.log("Class val: "+new Numbers().num_val)

/*
Operadores:
 - Operadores aritméticos
 - Operadores lógicos
 - Operadores relacionales
 - Operadores bit a bit
 - Operadores de Asignación
 - Operador ternario / condicional
 - Operador de cadena
 - Operador de tipo
*/

// Operadores - condicional
var num:number = -2
var result = num > 0 ?"positive":"non-positive"
console.log(result)

// Operadores - de cadena
var msg:string = "hello"+"world"
console.log(msg)

// Operadores - de tipo
var num = 12
console.log(typeof num);

// if
var x: number = 10, y = 20;
if (x > y) {
    console.log('x is greater than y.')
} else{
    console.log('x is less than or equal to y.')
}

// for
for (var i = 0; i < 3; i++) {
    console.log ("Block statement execution " + i);
}

// while
var n:number = 5
while(n > 5) {
    console.log("Entered while")
}

// do while
var n:number = 5
do {
    console.log("Entered do…while")
    } while(n>5)

// funciones
function foo(id:number,name:string,mail_id?:string){
    console.log("ID:", id);
    console.log("Name",name);
    if(mail_id!=undefined)
        console.log("Email Id",mail_id);
}

foo(123,"John");
foo(111,"mary","mary@xyz.com");

// Funciones - rest parameters
function addNumbers(...nums:number[]) {
    var i;
    var sum:number = 0;
    for(i = 0;i<nums.length;i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers",sum)
}
    
addNumbers(1,2,3)
addNumbers(10,10,10,10,10)

// Funciones - anónimas
var res = function(a:number,b:number) {
    return a*b;
};
console.log(res(12,2))

// Funciones - constructor
var myFoo = new Function("a", "b", "return a * b");
var x = myFoo(4, 3);
console.log(x);

// Funciones - lambda
var foo = (x:number)=>10 + x
console.log(foo(100))

// Arreglos
var alphas:string[];
alphas = ["1","2","3","4"]
console.log(alphas[0]);
console.log(alphas[1]);

// Arreglos - objeto
var arr_names:number[] = new Array(4)
for(var i = 0;i<arr_names.length;i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i])
}

// Arreglos - recorrido
var j:any;
var nums:number[] = [1001,1002,1003,1004]
for(j in nums) {
    console.log(nums[j])
}

// Tuplas
var mytuple = [10,"Hello"];
console.log(mytuple)

var mytuple2 = [];
mytuple2[0] = 120
mytuple2[1] = 234
console.log(mytuple2[1])

// Interfaces
interface IPerson {
    firstName:string,
    lastName:string,
    sayHi: ()=>string
}
    
var customer:IPerson = {
    firstName:"Tom",
    lastName:"Hanks",
    sayHi: ():string =>{return "Hi there"}
}
    
console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

// Clases
class Car {
    //field
    engine:string;
    
    //constructor
    constructor(engine:string) {
        this.engine = engine
    }
    
    //function
    disp():void {
        console.log("Engine is : "+this.engine)
    }
}

// Objetos
var obj = new Car("Engine 1")
console.log("Attribute value Engine: "+obj.engine)
obj.disp()