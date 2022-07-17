function findShort(s) {
    const words = s.split(' ');
    let smallest = words[0];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < smallest.length) {
            smallest = words[i]
        }
    }
    return smallest.length;
}

//used smallest.length because the test wanted the shortest word's length, not the word itself

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));