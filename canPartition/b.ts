// O(sum*n)
// @ts-nocheck
function canPartition(nums: number[]) {
  let sum = 0;
  let i, j;
  const n = nums.length;
  
  // Calculate sum of all elements
  for (i = 0; i < n; i++)
    sum += nums[i];

  const subset = sum / 2;
  
  if (sum % 2 != 0)
    return false;

  let part = Array(subset + 1).fill(0).map(() => Array(n + 1).fill(0));

  // initialize top row as true
  for (i = 0; i <= n; i++)
    part[0][i] = true;

  // initialize leftmost column,p
  // except part[0][0], as
  // 0
  for (i = 1; i <= subset; i++)
    part[i][0] = false;
  
  // Fill the partition table in bottom up manner
  for (i = 1; i <= subset; i++) {
    for (j = 1; j <= n; j++) {
      part[i][j] = part[i][j - 1];
      if (i >= nums[j - 1])
        part[i][j] = part[i][j] ||
        part[i - nums[j - 1]][j - 1];
    }
  }
  
  console.log(part);

  /*
   uncomment this part to print table
   for (i = 0; i <= sum/2; i++)
   { for (j = 0; j <= n; j++)
   printf ("%4d", part[i][j]); printf("\n"); }
   */

  return part[subset][n];
}

console.log(canPartition([1, 5, 11, 5]));
