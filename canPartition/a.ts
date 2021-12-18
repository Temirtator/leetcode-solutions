// O(2^n)
// @ts-nocheck
function canPartition(nums: number[]): boolean {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % 2 !== 0) return false;
  return isSubsetSum(nums, nums.length, Math.floor(sum / 2));
};

function isSubsetSum(arr, n, sum) {
  if (sum === 0) return true;
  if (n === 0 && sum !== 0) return false;
  if (arr[n - 1] > sum)
    return isSubsetSum(arr, n - 1, sum);
  
  return isSubsetSum(arr, n - 1, sum) || isSubsetSum(arr, n - 1, sum - arr[n - 1]);
}
