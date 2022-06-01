function triangulos (a,b,c) {
    if (a == b && b == c) {
     console.log ("Equilateros")   
    } 
    else if (a == b || b == c || a == c) {
        console.log ("Isósceles")
    }
    else {
        console.log("Escaleno")
    }
}

triangulos('2',2,2)