function foo(){
  var greeting = "Hello friend!";
  
  function bar(param){
    return eval(param);
  }
  return bar;
}

var myFunction = foo();

myFunction("greeting");
