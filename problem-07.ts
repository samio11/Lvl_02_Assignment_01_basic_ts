{
    //

    // Solve-07

    const logString = (value:unknown) =>{
        if(typeof value === 'string')
        {
            console.log(value);
        }
        else{
            throw new Error('Input is not a string.')
        }
    }

    // logString("Hello, TypeScript!");
    // logString(42);

    //
}