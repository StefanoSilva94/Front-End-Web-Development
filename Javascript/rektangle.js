function revStr(str) {
    return str.split("").reverse().join("");
}

function makeMatrix(rowNum, colNum) {
    var matrix = []
    for (i = 0; i < rowNum; i++) {
        matrix[i] = [];
        for (j = 0; j < colNum; j++) {
            matrix[i][j] = "  ";
        }
    }
    return matrix;

}

function rektangle(str, width, height) {
    var n = str.length;
    var colNum = width * (n - 1) + 1;
    var rowNum = height * (n - 1) + 1;
    var matrix = makeMatrix(rowNum, colNum);


    var shortStr = str.substr(1); //removes first letter of word - rekt ---> ekt
    var reverseStr = revStr(str);
    var shortRevStr = reverseStr.substr(1);//reverses string then removes the first letter tker ---> ker


    //fills rows
    var concatStr = str.charAt(0);
    //concatStr will be used to fill rows
    for (i = 1; i <= width; i++) {
        if ((i + 1) % 2 == 0) {
            concatStr = concatStr.concat(shortStr);
        }
        else if (i % 2 == 0) {
            concatStr = concatStr.concat(shortRevStr);
        }
    }

    console.log(concatStr);

    var revConcatStr = str.charAt(n - 1);
    for (i = 1; i <= width; i++) {
        if ((i + 1) % 2 == 0) {
            revConcatStr = revConcatStr + shortRevStr;
        }
        else if (i % 2 == 0) {
            revConcatStr = revConcatStr + shortStr;
        }
    }



    for (i = 1; i <= height + 1; i++) {
        if ((i + 1) % 2 == 0) {
            for (j = 0; j < colNum; j++) {
                matrix[i * (n - 1) - (n - 1)][j] = concatStr.charAt(j) + " ";
            }
        }
        else if (i % 2 == 0) {
            for (j = 0; j < colNum; j++) {
                matrix[i * (n - 1) - (n - 1)][j] = revConcatStr.charAt(j) + " ";
            }
        }
    }


    //now fill columns
    //concatStr will be used to fill cols
    var concatStr2 = str.charAt(0);
    for (i = 1; i <= height; i++) {
        if ((i + 1) % 2 == 0) {
            concatStr2 = concatStr2.concat(shortStr);
        }
        else if (i % 2 == 0) {
            concatStr2 = concatStr2.concat(shortRevStr);
        }
    }


    var revConcatStr2 = str.charAt(n - 1);
    for (i = 1; i <= height; i++) {
        if ((i + 1) % 2 == 0) {
            revConcatStr2 = revConcatStr2 + shortRevStr;
        }
        else if (i % 2 == 0) {
            revConcatStr2 = revConcatStr2 + shortStr;
        }
    }


    for (i = 1; i <= width + 1; i++) {
        if ((i + 1) % 2 == 0) {
            for (j = 0; j < rowNum; j++) {
                matrix[j][i * (n - 1) - (n - 1)] = concatStr2.charAt(j) + " ";

            }
        }
        else if (i % 2 == 0) {
            for (j = 0; j < rowNum; j++) {
                matrix[j][i * (n - 1) - (n - 1)] = revConcatStr2.charAt(j) + " ";
            }
        }
    }
    return matrix;

}

console.log(rektangle("REKT", 3, 3));