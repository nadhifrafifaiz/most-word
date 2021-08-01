bahasaG = () => {
    let sentence = document.getElementById("normal").value;

    words = sentence.split(" ");

    let counts = {}
    let keys = []

    for (let i = 0; i < words.length; i++) {
        var word = words[i];
        if (counts[word] === undefined) {
            counts[word] = 1;
            keys.push(word)
        } else {
            counts[word]++
        }
    }

    keys.sort(compare)
    function compare(a, b) {
        var countA = counts[a]
        var countB = counts[b]
        return countB - countA
    }


    document.getElementById("answer").innerHTML = (keys[0] + " " + counts[keys[0]]);

    for (let i = 0; i < keys.length; i++) {
        var key = keys[i];
        console.log(key + " " + counts[key]);
    }





}


