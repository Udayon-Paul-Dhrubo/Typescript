interface Person {
    sayHello(): void;
}

interface Musician extends Person {
    play(): void;
}


var drummer = <Musician>{};
drummer.sayHello = () => console.log("hello drummer");
drummer.play = () => console.log("play drummer");


interface Worker extends Person, Musician {
    work(): void;
}

var worker1 = <Worker>{};
worker1.sayHello = () => console.log("hello worker");
worker1.play = () => console.log("play worker");
worker1.work = () => console.log("work worker");


/* var worker2 : Worker = {
    sayHello: () => console.log("hello worker"),
    play: () => console.log("play worker"),
    work: () => console.log("work worker")
} */