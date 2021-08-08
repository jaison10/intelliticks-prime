let arr = []

var size;

size = window.prompt("Enter the array size: ");

var i = 0;
var j = 0;
var item; 
var isPrime = true;

while(i < size){
    item = Number(window.prompt("Enter an element between 2 and 99: "));
    if(item < 2 || item > 99){
        alert("Oops! Invalid input!");
        continue;
    }
    if(item.length == 0){
        alert("Oh, please enter some value!");
        continue;
    }
    arr.push(item);
    i++;
}


i = 0;

while(i < size){
    isPrime = true;
    for(j = 2; j <= arr[i]/2; j++){
        if(arr[i] % j == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        if(i == 0 || i == 1){
            isPrime = false;
        }
        else{
            for(j = 2; j <= i/2; j++){
                if(i % j == 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                console.log(arr[i], "is Prime at index", i);
            }
        }
    }
    i++;
}
