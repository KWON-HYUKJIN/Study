const increment = () => {
    let n = 1;
    return ()=>{
        return n++;
    }
};

const result = increment()

console.log(result()); 
console.log(result()); 
console.log(result()); 