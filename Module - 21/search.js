const lyrics = 'tumi bondhu kala pakhi ami jeni ki .bosonto kale tomay bolte parini .sada sada kala ';

//    const searchString = 'Pakhi';
//    const doesExist = lyrics.includes('pakhi');
//    const doesExist = lyrics.includes('Pakhi');
//    const doesExist = lyrics.includes(searchString);
   
//    const lyricsLowerCase = lyrics.toLowerCase();
//    const searchStringLowerCase = searchString.toLowerCase();
//    const doesExist = lyricsLowerCase.includes(searchStringLowerCase);
//    console.log(doesExist);

// -------------------------------------------------
// Index Of

console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('tumi'));

if(lyrics.indexOf('sada') !== -1){
    console.log('exists inside the string');
}
else{
    console.log('can not find it');
}

//Start with

console.log(lyrics.startsWith('tumi'));