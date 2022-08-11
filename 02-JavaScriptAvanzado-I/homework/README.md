
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;//=>cuando no se define la variable se toma como una variable global
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);//10
  console.log(a);//8
  var f = function(a, b, c) {
    b = a;
    console.log(b);//8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//9
}
c(8,9,10);
console.log(b);//10
console.log(x);//1

```

```javascript
console.log(bar);//undefined
console.log(baz);//undefined
foo();//"Hola!"
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//Franco
```

```javascript
var instructor = "Tony";
console.log(instructor);//Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//Franco
   }
})();
console.log(instructor);//Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";//=>let es un tipo de variable que nace y muere dentro del contexto donde fue creada, no se puede redefinir. 
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //The Flash
    console.log(pm);//Reverse Flash
}
console.log(instructor);//The Flash
console.log(pm);//Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"//2 number
"2" * "3"//6 number
4 + 5 + "px"//=>"9px"
"$" + 4 + 5//=>$45 por concatenacion primero hace $4+5 =>"$45"
"4" - 2 // 2 number
"4px" - 2 //NaN
7 / 0//
{}[0]//??
parseInt("09")//los convierte en numero natural
5 && 2 //2 =>como la primer condicion es 5 y es "true" la segunda condicion tambien va a cumplirse y como resultado sera el 2, si la primer condicion fuera false directamente no verifica la segunda y lanza falce
2 && 5 //5
5 || 0 //5 =>con el operador || si la primera condicion ya es true no verifica la segunda condicion y se queda con el primer valor del operador
0 || 5 //5 =>en los operadores || si la primer codnicion fuera false( 0 es considerado false ) intentara verificar la segunda condicion si la segunda es true devolvera la condicion que sea verdadera
[3]+[3]-[10]//23 => esto es por que a los array los convierte en string y lo concatena dando como resultado [33], luego resta la concatenacion (-[10]) => 23
3>2>1 //false 3>2 => true => 1 => 1>1 =>False
[] == ![] //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//undefined
   console.log(foo());//2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';
function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);//Undefined => al ser false, no entra en la condicion de verdadero y la variable snack no se crea y no puede retonar Friskies. Pero al pasar por false directamente debe retonar
//snack pero esta variable no se encuentra dentro del execution context de la funcion getFood. aun asi Js define la variable snack q se esta por fuera del if le asigna un espacio de memoria pero
//no sabe el valor q contendra dicha variable
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         var fullname="hola"
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//Aurelio De Rosa

var test = obj.prop.getFullname; //=> hace una referencia de la funcion y el this.fullname toma el valor del fullname="Juan Perez"

console.log(test());//Juan Perez

//
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
