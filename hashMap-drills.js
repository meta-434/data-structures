const HashMap = require('./hashMap');

function main() {
  const lotr = new HashMap();

  
    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");

    console.log('lotr: ', lotr);
};

// main();

// whatDoesThisDo

// const WhatDoesThisDo = function(){
//     let str1 = 'Hello World.';
//     let str2 = 'Hello World.';
//     let map1 = new HashMap();
//     map1.set(str1,10);
//     map1.set(str2,20);
//     let map2 = new HashMap();
//     let str3 = str1;
//     let str4 = str2;
//     map2.set(str3,20);
//     map2.set(str4,10);
//
//     // console.log(map1.get(str1));
//     // console.log(map2.get(str3));
//
//
//
// }
//
// WhatDoesThisDo();
// expecting
// 20 (val from str2 collides and overwrites val from str1)
// 10 (val from str4 collides and overwrites val from str3)

// understanding

function understanding() {
  let und = new HashMap();
  und.set(10, 1);
  und.set(22, 2);
  und.set(31, 3);
  und.set(4, 4);
  und.set(15, 5);
  und.set(28, 6);
  und.set(17, 7);
  und.set(88, 8);
  und.set(59, 9);

  console.log(und);
}
understanding();