// Subarray with 0 sum
let arr = prompt("Enter Num");
arr = Number.parseInt(arr);
        let arr1 = [];
        let arr2 = [];
        var sum = 0 ;
        var multi = 1;
        for(let i=0; i<arr ; i++){
            let a = prompt("Enter Num");
            a = Number.parseInt(a);
            arr1.push(a);
        }
        for(let a = 1 ; a<arr-1;a++){
            sum += arr1[a];
            multi *= arr1[a];
        }
        
        if(sum == 0 || multi == 0){
            console.log(true);
        }
        else{
            console.log(false);
        }
