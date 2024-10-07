{
//

// Solution -05
    type Student = {
        name: string;
        age: number;
        grades: number[];
    }

    const calculateAverageGrade = <T>(studentInfo: T) => {
        console.log(studentInfo);
        const {grades} = studentInfo;
        console.log(grades)
        const sum = grades.reduce((acc:number, curr:number) => acc + curr, 0);
        const total = grades.length;
        const average = sum / total;
        console.log(`The average grade for ${studentInfo.name} is ${average}`);
        return average;
    }

    const student1: Student = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90]
    };
    const averageGradeForBob = calculateAverageGrade(student1);



//
}