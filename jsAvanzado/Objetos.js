class Poligono {
    constructor (height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get   area  ()   {
       return this.calcArea();
     }
    // Método
    calcArea () {
      return this.height * this.width ;
    }

    //Metodo Estatico
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  
  const cuadrado = new Poligono (10, 10);
  
  console.log(cuadrado.area); // 100 


