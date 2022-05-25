def sum_pairs(array, target):
    result = []
    for i in range(0, len(array)):
        for j in range(i + 1, len(array)):
            if (array[i] + array[j] == target):
                result.append([array[i], array[j]])
    if len(result) > 0:
        return result
    else:
        return ('unable to find pairs')

#print(sum_pairs([1,2,3,4,5], 9))