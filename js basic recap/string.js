function string(text){
    let reverseText = '';

    for (let i = text.length - 1; i >=0; i--){
        reverseText += text[i];
    }
    console.log(reverseText);
}
string('Hello');
