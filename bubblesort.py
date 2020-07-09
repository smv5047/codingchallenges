# bubble sort practice

def bubble_sort(array):
    end = (len(array)-1)
    is_flipped = True
    while is_flipped is True:
        is_flipped = False
        for i in range(0, end):
            print(i)
            if array[i] > array[i+1]:
                is_flipped = True
                swapped_value = array[i]
                array[i] = array[i+1]
                array[i+1] = swapped_value

    return array


sample_array = [1, 5, 2, 4, 3, 61, 14]

print(bubble_sort(sample_array))
