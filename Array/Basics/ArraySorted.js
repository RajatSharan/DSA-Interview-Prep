//Check if array is sorted

function Sort(arr) {

    for(let i=1;i<arr.length;i++){

        if(arr[i-1]>arr[i]){

            return false

        }

    }

        return true



}

console.log(Sort([10,30,20,40,50]))