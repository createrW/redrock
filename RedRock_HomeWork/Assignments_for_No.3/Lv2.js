//1
let arr = [1,[2,3],[4,5,[6,7,8]],9];
function flatten(arr) {
    //你的代码
    var res=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i]))
        res=res.concat(flatten(arr[i]));//是数组，把它再次切割然后丢进这个整体
        else{
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(flatten(arr));
//结果 [1,2,3,4,5,6,7,8,9]
//2
let arr2 = [1,[2,3],[4,5,[6,7,8]],9];
function flatten2(arr) {
    //你的代码
     let i=0;
     let res=[];
     while(True){
        if(i==arr.length)break;
    while(i<arr.length &&!Array.isArray(array[i])){res.push(arr[i]);
        i++;
    }
    while(i<array.length &&Array.isArray(array[i])){res=res.concat(flatten2(arr[i]))
        i++;
    }}
    return res;
}
console.log(flatten(arr2));

//结果 [1,2,3,4,5,6,7,8,9]