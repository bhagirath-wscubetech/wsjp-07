const add = (a, b) => {
    return a + b;
}

const subt = (a, b) => {
    return a - b;
}

const multi = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}

export default add;  // default export -> can be only one!
export { subt, multi, div }; // named export -> can be many