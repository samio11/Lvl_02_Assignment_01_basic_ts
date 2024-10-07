{
    //

    //  Solve-06

    type Book = {
        title: string;
        author: string;
        publishedYear: number;
    }

    const isRecentBook = <T>(bookInfo: T) => {
        // console.log(bookInfo)
        const { publishedYear } = bookInfo;
        const currentYear: number = new Date().getFullYear();
        // console.log(currentYear)
        const lastFiveYears = []
        for (let i: number = currentYear; i >= currentYear - 5; i--) {
            lastFiveYears.push(i)
        }
        // console.log(lastFiveYears)
        const findYear = lastFiveYears.find((x: number) => x === publishedYear)
        if (findYear) {
            console.log(true)
            return true
        }
        else {
            console.log(false)
            return false
        }
    }

    const book1: Book = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022
    };

    isRecentBook(book1);


    //
}