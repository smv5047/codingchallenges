class Solution:
    def isPalindrome(self, x: int) -> bool:
        # convert to string
        x = str(x)
        number_len = len(x)
        comparison_rounds = (number_len//2)
        for i in range(comparison_rounds):
            if x[i] == x[-1-i]:
                continue
            else:
                return False
        return True


test = Solution()

print(test.isPalindrome(1000021))
