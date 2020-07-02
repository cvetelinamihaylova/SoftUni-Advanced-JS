function test() {
    'use strict';
  
    let obj1 = { a: 0 , b: { c: 0}, d: {g: 0}};
    console.log(obj1.propertyIsEnumerable('a'));
    console.log(obj1.propertyIsEnumerable('g'));

    let obj2 = Object.assign({}, obj1);
    obj2.a = 2;
    obj1.a = 8;

    obj1.b.c = 2;
    obj2.b = 8; 

    obj2.d.g = 5
    console.log(obj1);
    console.log(obj2);

    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 'hello'


    console.log(obj3)
    console.log(obj1)


  }
  
  test();