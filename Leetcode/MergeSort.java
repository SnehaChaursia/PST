package Leetcode;

import java.util.Arrays;

public class MergeSort {
    // Merge Sort function
    public static void mergeSort(int[] array) {
        if (array.length < 2) {
            return; // Base case: If the array has 1 or no elements, it's already sorted
        }

        // Divide the array into two halves
        int mid = array.length / 2;
        int[] left = Arrays.copyOfRange(array, 0, mid);  // Left half
        int[] right = Arrays.copyOfRange(array, mid, array.length); // Right half

        // Recursively sort both halves
        mergeSort(left);
        mergeSort(right);

        // Merge the sorted halves
        merge(array, left, right);
    }

    // Merge two sorted arrays into a single sorted array
    private static void merge(int[] array, int[] left, int[] right) {
        int i = 0, j = 0, k = 0;

        // Compare and merge elements from left and right arrays
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                array[k++] = left[i++];
            } else {
                array[k++] = right[j++];
            }
        }

        // Copy remaining elements from the left array
        while (i < left.length) {
            array[k++] = left[i++];
        }

        // Copy remaining elements from the right array
        while (j < right.length) {
            array[k++] = right[j++];
        }
    }

    // Main function to test the Merge Sort
    public static void main(String[] args) {
        int[] array = {38, 27, 43, 3, 9, 82, 10};
        System.out.println("Original Array: " + Arrays.toString(array));

        mergeSort(array);

        System.out.println("Sorted Array: " + Arrays.toString(array));
    }
}
