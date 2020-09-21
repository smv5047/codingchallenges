# return first not repeating character
# use hash table

def first_not_repeating_character(s):
    # create empty dict
    characters = {}
    # create list to maintain order
    order_of_characters = []
    # iterate over char; add to dict and list if new, otherwise just add to dict
    for char in s:
        if char in characters:
            characters[char] += 1
        else:
            characters[char] = 1
            order_of_characters.append(char)
    # iterate over list to identify first char that repeats
    for char in order_of_characters:
        if characters[char] == 1:
            return char
     # if no characters repeat return "_"
    return '_'
