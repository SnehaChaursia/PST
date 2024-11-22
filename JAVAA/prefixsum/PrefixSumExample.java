package JAVAA.prefixsum;
public class PrefixSumExample {
    public static void main(String[] args) {
        // Input array
        int[] arr = {2, -1, 3, -4, 5};
        
        // Step 1: Create a prefix sum array
        int[] prefixSum = new int[arr.length];
        
        // Initialize the first element of the prefix sum array
        prefixSum[0] = arr[0];
        
        // Calculate the prefix sum for the rest of the elements
        for (int i = 1; i < arr.length; i++) {
            prefixSum[i] = prefixSum[i - 1] + arr[i];
        }
        
        // Step 2: Display the prefix sum array
        System.out.println("Prefix Sum Array: ");
        for (int sum : prefixSum) {
            System.out.print(sum + " ");
        }
    }
}
