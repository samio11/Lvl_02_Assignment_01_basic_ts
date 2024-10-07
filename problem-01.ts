{
    //

    
    //  Solution -01
    const repeatString = (value: string, iteration: number) => {
        let b: string[] = [];
        for (let i: number = 0; i < iteration; i++) {
            b.push(value)
        }
        return console.log(...b);
    }
    repeatString("Hello!", 3)


    //
}