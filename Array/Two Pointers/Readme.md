# Two Pointers Pattern (Beginner Friendly Guide)

## What is the Two Pointers Pattern?

The **Two Pointers pattern** is a technique where we use **two indices (pointers)** to move through an array instead of using nested loops.

It helps reduce time complexity from **O(n²)** to **O(n)** in many problems.

---

## When should I think about Two Pointers?

Ask these questions:

- Is the array **sorted** or can it be sorted?
- Am I looking for **pairs or triplets**?
- Do I need to **compare values from both ends**?
- Is the problem asking for **in-place modification**?

If **YES** to any → Two Pointers is a strong candidate.

---

## Common Types of Two Pointer Problems

1. **Opposite Direction Pointers**
   - One pointer starts at the beginning
   - One pointer starts at the end

   Examples:
   - Two Sum (sorted array)
   - 3Sum
   - Merge Sorted Array

2. **Same Direction Pointers**
   - Both pointers start at the beginning
   - One moves faster than the other

   Examples:
   - Remove Duplicates
   - Move Zeroes

---

## Basic Opposite Direction Template

```js
let left = 0;
let right = arr.length - 1;

while (left < right) {
    if (condition is met) {
        // do something
        left++;
        right--;
    } else if (need bigger value) {
        left++;
    } else {
        right--;
    }
}
