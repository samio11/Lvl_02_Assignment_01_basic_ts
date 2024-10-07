{
    //
    // Solve-08

    class Car{
        brand : string;
        model : string;
        year : number;
        constructor(brand : string, model : string, year : number){
            this.brand = brand;
            this.model = model;
            this.year = year;
            console.log(`Your car model is: ${this.year} ${this.brand} ${this.model}`)
        }
    }

    let myCar = new Car("Toyota", "Corolla", 2020);

    //
}