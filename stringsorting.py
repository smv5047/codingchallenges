# Print out all of the strings in the following array in alphabetical order, each on a separate line.
# ['Waltz', 'Tango', 'Viennese Waltz', 'Foxtrot', 'Cha Cha', 'Samba', 'Rumba', 'Paso Doble', 'Jive']
# The expected output is:

# 'Cha Cha'
# 'Foxtrot'
# 'Jive'
# 'Paso Doble'
# 'Rumba'
# 'Samba'
# 'Tango'
# 'Viennese Waltz'
# 'Waltz'

# You may use whatever programming language you'd like.
# Verbalize your thought process as much as possible before writing any code. Run through the UPER problem solving framework while going through your thought process.

test_array = ['Waltz', 'Tango', 'Viennese Waltz', 'Foxtrot',
              'Cha Cha', 'Samba', 'Rumba', 'Paso Doble', 'Jive']


def alphapetical_sort(array):

    array.sort()
    for word in array:
        print(word)


alphapetical_sort(test_array)


def middle_sort(array):

    # return middle character
    # determin halfway point
    # return middle character
