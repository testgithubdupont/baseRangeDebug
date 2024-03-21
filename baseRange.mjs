import Debug from "debug";

const printArg = Debug('baseRange:arg')
    , printTab = Debug('baseRange:tab');

export default function baseRange(...arg) {


    let [start, end, step = 1, fromRight = false] = arg;


    let index = -1
        , length = Math.max(Math.ceil((end - start) / (step)), 0)
        , result = Array(length);


    printArg(start, end, step, result.length);


    while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
        printTab(result)
    }
    return result;
}
