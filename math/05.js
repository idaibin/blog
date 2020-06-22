function main(number) {
    const rewards = [1, 2, 5, 10];
    let totalNumber = 0;
    function get(totalReward, result) {
        if (totalReward === 0) {
            console.log('result :', result);
            totalNumber += 1;
            return result;
        } else if (totalReward < 0) {
        } else {
            for (let i = 0; i < rewards.length; i++) {
                const newResult = result.slice(0);
                newResult.push(rewards[i]);
                get(totalReward - rewards[i], newResult);
            }
        }
    }
    get(number, []);
    return totalNumber;
}
main(10);

function test(number) {
    function get(number, result) {
        if (number === 1) {
            if (!result.includes(1)) {
                result.push(1);
            }
            console.log('result', result);
        } else if (number < 0) {
            return;
        } else {
            for (let index = 1; index <= number; index++) {
                if (
                    (index === 1 && !result.includes(index)) ||
                    (index !== 1 && number % index === 0)
                ) {
                    const newResult = result.slice(0);
                    newResult.push(index);
                    get(number / index, newResult);
                }
            }
        }
    }
    get(number, []);
}
test(8);
