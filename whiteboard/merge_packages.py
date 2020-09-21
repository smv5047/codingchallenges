# you are given a list of items and a limit
# find the first two items that equal limit
# return index position in the list of items
# return an empty array if no numers add ot limit

def merge_packages(items, limit):

    weight_location = {}

    if len(items) < 2:
        return []
    if len(items) == 2:
        if items[0] + items[1] == limit:
            return (1, 0)

    for i in range(len(items)):
        weight_location[items[i]] = i

    # for i in range(len(items)):
    #     for j in range(len(items)):
    #         if items[i] +items[j] == limit:
    #             if i > j:
    #                 return [i,j]
    #             else:
    #                 return [j,i]

    for key in weight_location:
        weight_needed = limit-key
        if weight_needed in weight_location:
            # sort_weights = sorted(weight_location.items())
            return((weight_location[limit-key], weight_location[key]))

    return []
