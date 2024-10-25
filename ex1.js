setInterval(() => {
    
    let number = Math.floor(Math.random() * 100) + 1;
    let listNum = [];
    for (let i = 1; i < number; i++) {
        if(number %i ==0){
            listNum.push(i);
        }
    }
    let total = listNum.reduce((prev,curr)=>{
        return prev + curr;
    },0)
    if(total == number){
        console.log(number +" số hoàn hảo");    
    }else{
        console.log(number +" ko phải số hoàn hảo");
        
    }
    
    
   
}, 2000);