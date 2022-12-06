function twoSum(nums: number[], target: number): number[] {
    if (nums.length < 2) {
        throw new Error('No two sum solution');
    }

    for (let numberOneIndex = 0; numberOneIndex < nums.length; numberOneIndex++) {
        const numsWithoutNumberOne = nums.slice(numberOneIndex + 1);

        for (let numberTwoIndex = 0; numberTwoIndex < numsWithoutNumberOne.length; numberTwoIndex++) {
            if (nums[numberOneIndex] + numsWithoutNumberOne[numberTwoIndex] === target) {
                return [numberOneIndex, numberTwoIndex + numberOneIndex + 1];
            }
        }
    }

    throw new Error('No two sum solution');
};

export default twoSum;