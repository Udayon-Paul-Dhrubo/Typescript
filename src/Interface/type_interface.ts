interface Rectangle {
    width: number;
    length: number;
}

function drawRectangle(rectangle: Rectangle) {
    console.log(rectangle.length);
    console.log(rectangle.width);
}

let _3DRectangle = {
    width : 30,
    length : 20,
    height : 10
}

drawRectangle(_3DRectangle);    // >> no error
                                // Reference pathale just j field gulo thakar kotha seta ase kine check korbe

drawRectangle({
    width : 30,
    length : 20,
    //height : 10 // >> error
                // direct object pathale strictly check korbe
                // j field gulo thakar kotha strictly oigulo thakte hbe
})