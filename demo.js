let holi = ['JavaScript', 'HTML', 'CSS', "CrisiusMaximus"];
let vacio = [];
let rescate = holi.sort(function(a, b){
    return a.length - b.length;
    //console.log(val1.length, val2.length);
    //console.log(holi[holi.length -1]);
    
})

    //console.log(rescate);
    //console.log(holi);
    let nom = "Artemisa"
    let soBeau = [
        {nombre: "nombre0", edad: "edad0"},
        {nombre: "nombre1", edad: "edad1"},
        {nombre: "Artemisa", edad: 22},
        {nombre: "nombre3", edad: "edad3"},
        {nombre: "nombre4", edad: "edad4"}
    ]
    for(let i = 0; i < soBeau.length; i++){
        if(soBeau[i].nombre === nom){
          //console.log(soBeau[i]);
        }
      }

      let numero = 24;
      let car = numero.toString().split("").reverse().join("");
      //console.log(car);

      let cajita = ["Luis", "Lotso", "Juan", "Christoper", "Leslie"];
      let mochila = cajita.map(function(amigo, ind){
            return "Querido(a) " + amigo + ind
            //return amigo[ind]
        }
    )
    
    //console.log(mochila);
    let nomd = [{nombre: "Artemisa", edad: 22}, {nombre: "Criss", edad: 24}]
    let carg = [];
    nomd.map(function(amigo, ind){
      //carg.push(amigo)
      console.log(amigo.nombre)
    })
    //console.log(carg);

    //return array.map(item => item[propiedad]);
    