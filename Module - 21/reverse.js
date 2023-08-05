function reverseString(text){
    let reversed ='';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
        //console.log(element,reversed);
    }
    return reversed;
}


function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    for(let i = words.length-1; i >= 0; i--){
        result.push(words[i]);
    }
    const reversed = result.join(' ');
    return reversed;
}


const myString ='I am a good boy';
const reversed = reverseString(myString);
const myString1 ='I am a good boy';
const reversed1 = reverseWords(myString1);
console.log(reversed1);