// activity 1

const runFive = (str) => {
    for (i = 0; i < 5; i++) {
    console.log(str);
}
};
const runOnce = (str, fn) => {
    fn(str);
};

runOnce("Hello Codenation", runFive);





