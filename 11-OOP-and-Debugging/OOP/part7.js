class Father{

    static addTwo(){
        let num1=10
        let num2=20
        let sum=num1+num2
        console.log(sum)
    }
}


class Son extends Father{


}

Son.addTwo();
Father.addTwo();