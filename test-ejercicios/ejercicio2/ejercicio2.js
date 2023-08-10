
const palindromo = (text) => {
    const separate = text.split('');
    const invert = separate.reverse();
    const invertedText = invert.join('');

    return (invertedText === text);
};


// console.log(palindromo('allivessevilla'));

module.exports = palindromo;