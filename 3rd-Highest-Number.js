/*
    3rd Highest Number in Array
*/

function sortArrays(arr) {

    for (let i = 0; i <= arr.length; i++) {

        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;

            i = -1;
        }
    }

    return arr;
}

let arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
document.write("Original array: ["
    + (arr).join(", ") + "]<br>");

arr = sortArrays(arr);
arr_r = arr.reverse();

document.write("Sorted array: [" + arr_r.join(", ") + "]<br>");
document.write("3rd Highest Nubmer : " + arr[2]);

