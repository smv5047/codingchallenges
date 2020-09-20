class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # iterate over array

        # if value of i is equal to i+1, move i+1 to the end of the array
        # when i <= i+1 break and return i
        # while (nums[i]<=nums[i+1]):
        #     if (nums[i] == nums[i+1]):
        #         nums[-1] = nums[i+1]
        #         i+=2
        #     else:
        #         i+=1
        for i, num in enumerate(nums):
            if i < (len(nums)-1):
                if (nums[i] > nums[i+1]):
                    return i
                if (nums[i] == nums[i+1]):
                    nums[-1] = nums[i+1]

        # Restrictions - Must modify original array
        # output - length of no dupe array
