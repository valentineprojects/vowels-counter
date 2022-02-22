function vowelCount(){
    
    //Get input value
    let input = document.getElementById("input-id").value;

    //Match eatch vowel
    let countA = (input.match(/a/g) || []).length
    let countE = (input.match(/e/g) || []).length
    let countI = (input.match(/i/g) || []).length
    let countU = (input.match(/u/g) || []).length
    let countO = (input.match(/o/g) || []).length
    
    //Sum all vowels
    let count = countA + countE + countI + countU + countO

    console.log(count)

    //Create Text node to append to window
    let countNode = document.createTextNode(count)
    document.getElementById('count-id').append(countNode);
}

function vowelCountLoop () {
        
    //Get input value
     let input = document.getElementById("input-id").value;

     const vowels = ['a', 'e', 'i', 'u', 'o']

     let count = 0;

     for (let letter of input.toLowerCase()){
         if (vowels.includes(letter)){
            count++;
         }
    }

    console.log(count)

    //Create Text node to append to window
    let countNode = document.createTextNode(count)
    document.getElementById('count-id').append(countNode);
}

function vowelCountOptimal (){

    //Get input value
    let input = document.getElementById("input-id").value;

    const count = input.match(/[aeiou]/gi).length;

    //Create Text node to append to window
    let countNode = document.createTextNode(count)
    document.getElementById('count-id').append(countNode);
}