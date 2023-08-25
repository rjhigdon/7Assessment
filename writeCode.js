//1) 
function sumZero(array){
    for(i=0; i<array.length; i++){
        for(j=0; j<array.length; j++){
            if((array[i] + array[j]) === 0){
                return true
            }
        }
    }
    return false
}
console.log(sumZero([1, 3, 2,-2]))
console.log(sumZero([1, 3, 5, -2, 25, -5]))
console.log(sumZero([1, 3, 2]))
console.log(sumZero([1]))
console.log(sumZero([]))

//runtimeO(n)

//2)
function hasUniqChars(str){
    const strArr = str.split('')
    const uniqChars = new Set(strArr);
    if(strArr.length === uniqChars.size){
        console.log(true)
    }else{
        console.log(false)
    }
}
hasUniqChars('monday')
hasUniqChars('moonday')
//runtime: O(n)

//3)
function isPangram(str){
    let lowerStr = str.toLowerCase();
    lowerStr.split('')
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alphaSet = new Set(alphabet)
    const strSet = new Set(lowerStr) 
    if(strSet.size === alphabet.length){
                console.log(true)
            }else{
                console.log(false)
            }
}



isPangram("The quick brown fox jumps over the lazy dog")
isPangram("I like cats, but not mice")
// runtime: O(n)

//4)

function findLongest(array){
    strLength = 0
    for(i = 0 ; i < array.length; i++){
        const string = array[i]
        if (string.length>strLength){
            strLength = string.legnth
        }
    }
    console.log(strLength)
}

findLongest(["hi", "hello"])

//runtime: Object(n)