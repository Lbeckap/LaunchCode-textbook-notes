// Sliding window probelm
    //ex: which 3 numbers in an array create the largest sum
    //ex: given an array, find the average of all contiguous subarrays of size "K".

    let slidingArrTest = [1, 2, 3, 4, 5];
    let slidingArrTest2 = [1, 3, 2, 6, -1, 4, 1, 8, 2];

        // naive approach
        // [(1+2+3)/3, (2+3+4)/3, (3+4+5)/3] 
            // there are duplicate steps 2+3 & 3+4
            // the window would be the duplicate steps
            // the edges would be what the next iteration requires

    function avg_sub_arrays_naive(arr, k) {
        const averages = [];

        for (let i = 0; i <= arr.length - k; i++) {
            let sum = 0;
            for (let j = 0; j < k; j++) {
                sum += arr[i + j];
            }
            averages.push(sum / k);
        }

        return averages;
    }

    function avg_sub_arrays_better(arr, k) {
        const averages = [];
        let windowStart = 0;
        let windowSum = 0;

        for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            windowSum += arr[windowEnd];
            if (windowEnd >= k - 1) {
                // add the average of the current window to averages arr
                averages.push(windowSum / k);

                // subtract the integer at the windowStart from the window sum
                windowSum -= arr[windowStart];

                // move the window start one spot
                windowStart++;
            }
        }
        return averages;
    }

    console.log(avg_sub_arrays_naive(slidingArrTest, 3)); // answer [2, 3, 4]
    console.log(avg_sub_arrays_naive(slidingArrTest2, 5)); // answer [2.2, 2.8, 2.4, 3.6, 2.8]

    console.log(avg_sub_arrays_better(slidingArrTest, 3)); // answer [2, 3, 4]
    console.log(avg_sub_arrays_better(slidingArrTest2, 5)); // answer [2.2, 2.8, 2.4, 3.6, 2.8]