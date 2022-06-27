function processData(input) {
 
    // input = input.split('\n');
    input.splice(0, 1);

// console.log(input);

// let final = 'abcde';
let final = "";
let finalBuffer = [final];

for (var i = 0; i < input.length; i++) {
    let el = input[i];
    console.log(el) ;
    if (el.length > 1) {
        // // console.log('here')

        let elSplit = el.split(" ");
        let ops = elSplit[0];
        console.log("ops: ", ops);

        let item = elSplit[1];
        console.log("item: ", item);

        if (ops === "1") {
            finalBuffer.push(final);
            final = final + item;
            console.log("final: ", final); 
           
        }

        if (ops === "2") {
            finalBuffer.push(final);
            final = final.substring(0, final.length - item);
           
        }

        if (ops === "3") {
            console.log(final.substring(item - 1, item));
        }
    } else {

        final = finalBuffer.pop();
    }

    // end of FOR LOOP I
}

console.log(final);
console.log(finalBuffer);

// ! end of function
}

let arr1 = ["8", "1 abc", "3 3", "2 3", "1 xy", "3 2", "4", "4", "3 1"]; // c y a

let arr2 = ["7", "1 fg", "3 6", "2 5", "4", "3 7", "4", "3 4"]; // f g d   // note  here starting state of string is:  abcde

processData(arr1);