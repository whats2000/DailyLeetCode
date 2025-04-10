function isArraySpecial(nums: number[]): boolean {
  let previousNumberIsOdd = nums[0] % 2 === 1;

  for (let i = 1; i < nums.length; i++) {
    const currentNumberIsOdd = nums[i] % 2 === 1;
    if (previousNumberIsOdd === currentNumberIsOdd) {
      return false;
    }
    previousNumberIsOdd = currentNumberIsOdd;
  }

  return true;
}