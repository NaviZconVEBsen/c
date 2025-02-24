alert("Sizda hozir random sonlar chiqarmoqchimiz: 😊");
let randomSon=Math.floor(Math.random()*90+10);
let a=2;
alert("Random orqali chiqqan son: "+randomSon);
confirm("Random sonni 2ga ko'paytirib va bol'moqchimiz");

alert(`Random orqali chiqqan son:  ${+randomSon}edi \n biz uni 2ga k'opaytirib ${+randomSon*2},  \n va shu sonni 2ga bolib: ${+randomSon/2} \n va su sonni 3ga bolgandagi qoldiq: ${+randomSon%3} sonni chiqardik` );