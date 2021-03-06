/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
type SortType<T> = (arr: T) => T

/**
 * 1. 冒泡排序
 * 算法描述如下:比较相邻的元素。如果第一个比第二个大,就交换他们;
 * 对于每个相邻的元素重复相同的工作,直到最后一个元素,这样最后的元素会是最大的数
 * 针对所有元素重复以上的步骤,除了最后一个元素
 * 重复上面1~3步骤,知道排序结束
 */
export const bubbleSort: SortType<number[]> = (curArr) => {
  const arr = [...curArr]
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0, temp; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

export const selectSort: SortType<number[]> = (curArr) => {
  const arr = [...curArr];
  for (let i = 0, min, len = arr.length; i < len; i++) {
    min = arr[i];
    for (let j = i + 1, temp; j < len; j++) {
      if (min > arr[j]) {
        temp = min;
        min = arr[j];
        arr[j] = temp;
      }
    }
    arr[i] = min;
  }
  return arr;
}

function insert(arr: number[], i: number, x: number) {
  let p = i - 1;
  while (p >= 0 && arr[p] > x) {
    arr[p + 1] = arr[p];
    p -= 1;
  }
  arr[p + 1] = x;
}

export const insertSort: SortType<number[]> = (curArr) => {
  const arr = [...curArr];
  for (let i = 1; i < arr.length; i++) {
    insert(arr, i, arr[i])
  }
  return arr;
}

/**
 * 3. 快速排序
 */
/**
 * 1. 在数据集中找出基准元素
 * 2. 小于基准元素放到左边，大于基准元素放到右边
 * 3. 对左右两个集合不断重复1、2中步骤
 */
export const quickSort: SortType<number[]> = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  // 基准元素下标
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  // left 是存储大于基准元素集合;right则相反
  const left = []; const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
export const quickSort2: SortType<number[]> = (arr) => {

  if (arr.length < 2) {
    return arr
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort2(left), pivot, ...quickSort2(right)]
}

function swap(A: number[], i: number, j: number) {
  [A[i], A[j]] = [A[j], A[i]]
}
function partition(A: number[], low: number, high: number) {
  const pivot = A[high - 1];
  let i = low;
  let j = high - 1;
  while (i !== j) {
    if (A[i] <= pivot) {
      i++
    } else {
      swap(A, i, --j)
    }
  }
  swap(A, j, high - 1);
  return j
}
export const quickSort3 = (arr: number[], low = 0, high = arr.length) => {
  if (high - low < 2) return
  const j = partition(arr, low, high);
  quickSort3(arr, low, j);
  quickSort3(arr, j, high)
}

const merge = (left: number[], right: number[]) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift()!)
    } else {
      result.push(right.shift()!)
    }
  }
  return result.concat(left, right);
}
/**
 * 
 * @param arr 归并排序
 */
export const mergeSort: SortType<number[]> = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const l = arr.length;
  const middle = Math.floor(l / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right))
}

const merge2 = (arr: number[], l: number, q: number, r: number) => {
  const left = arr.slice(l, q);
  const right = arr.slice(q, r);
  left.push(Number.MAX_SAFE_INTEGER);
  right.push(Number.MAX_SAFE_INTEGER)
  for (let k = l, i = 0, j = 0; k < r; k++) {
    arr[k] = left[i] > right[j] ? right[j++] : left[i++]
  }
}

export const mergeSort2: SortType<number[]> = arr => {
  function innerSort(A: number[], l: number, r: number) {
    if (r - l < 2) return;
    const q = Math.floor((l + r) / 2);
    innerSort(A, l, q);
    innerSort(A, q, r);
    merge2(A, l, q, r);
  }
  innerSort(arr, 0, arr.length)
  return arr;
}
