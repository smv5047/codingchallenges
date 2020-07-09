# Add up and print the sum of the all of the minimum elements of each inner array:
# [[8, 4], [90, -1, 3], [9, 62], [-7, -1, -56, -6], [201], [76, 18]]
# The expected output is given by:
# 4 + -1 + 9 + -56 + 201 + 18 = 175
# You may use whatever programming language you'd like.
# Verbalize your thought process as much as possible before writing any code. Run through the UPER problem solving framework while going through your thought process.


def min_element_sum(array):
    # discover length of array passed as argument
    array_length = len(array)
    # create placeholder array for min value
    min_values = []
    # Loop over each inner array
    for i in range(0, array_length):
        # Compare the values and determine min (use python native function)
        # add the min values to placeholder array
        min_values.append(min(array[i]))
    # sum up values in placeholder array
    return sum(min_values)


test_array = [[8, 4], [90, -1, 3], [9, 62], [-7, -1, -56, -6], [201], [76, 18]]


print(min_element_sum(test_array))
