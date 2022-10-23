var input = document.getElementById('input');
var result=document.getElementById('result');

const Display=(num)=>{
    input.value=input.value+num;
}

const Play=()=>{
    result.textContent=eval(input.value);
}

const Clear=()=>{
    input.value="";
    result.textContent="";
}

const Delete=()=>{
    input.value=input.value.slice(0,-1);
    if(input.value==0){
        result.textContent="";
    }
}