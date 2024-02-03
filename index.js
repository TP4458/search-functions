array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function binarySearch(array, value) {
  low_point = 0;
  hi_point = array.length - 1;
  while (low_point <= hi_point) {
    mid = (low_point + hi_point) / 2;
    if (array[mid] == value) {
      return mid;
    } else if (array[mid] < value) {
      low_point = mid + 1;
    } else {
      hi_point = mid - 1;
    }
  }
  return -1;
}
