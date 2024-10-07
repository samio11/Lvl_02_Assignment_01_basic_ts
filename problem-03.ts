{
    //

    //  Solution-03
    const filterEvenNumbers  = (value : number[]) : number[] =>
    {
        const evenNUmbers = value.filter(num => num % 2 === 0);
        console.log(evenNUmbers)
        return evenNUmbers;

    }
    filterEvenNumbers([1, 2, 3, 4, 5, 6])


    //
}