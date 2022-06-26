const string = "a race, car a";

var isPalindrome = function(x) {
    x = x.toLowerCase();
    x = x.split("");
    x = x.filter((a) => {
        let charCodeA = a.charCodeAt();
        return charCodeA >= 48 && charCodeA <= 57 || charCodeA >= 97 && charCodeA <= 122
    })
    
    let last = x.length - 1;
    for(let i = 0; i < x.length; i++){
        if (last < i){
            break;
        }
        if(x[i] !== x[last]){
            return false;
        } else {
            last--;
        }
    }
    return true;
};

console.log(isPalindrome(string));