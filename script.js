function squareRoot(){
    let num = document.getElementById("input").value;
    let result;


    try{
        if(Number(num < 0)){
            throw new Error("Number cannot be negative!");
        }
        result = Math.sqrt(num)
        document.getElementById("output").innerHTML = "The square root of " + num + " is  " + result;
    }catch(error){
        
        document.getElementById("output").innerHTML = ("An error occured: " + error.message);
        
    }

};