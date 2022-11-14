let sayHi=async ()=>{
    return "Hi"
}

let display=async ()=>{
    let result=await sayHi();
    console.log(result);
}
display()