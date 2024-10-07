{
//

   // Solution-04
    const reverseArray = <T>(value: T[]) => {
        let storeArray = [];
        for (let i: number = value.length - 1; i >= 0; i--) {
            storeArray.push(value[i])
        }
        console.log(storeArray)
    }
    reverseArray(["cherry", "banana", "apple"])
    reverseArray([10, 20, 30])


//
}