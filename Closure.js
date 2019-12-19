function foo(){
  var greeting = "Hello friend!";
  
  function bar(){
    return greeting;
  }
  return bar;
}

var myFunction = foo();

myFunction();
