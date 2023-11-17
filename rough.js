
function arraySum_target(nums, target_num) {
    let sorted_nums = nums.sort((a, b) => a - b);
    let main_nums = []
    let same_nums = []
    let n = sorted_nums.length
    for(let i = 0; i< n; i++){
        if (sorted_nums[i] != sorted_nums[i-1]){
            main_nums.push(sorted_nums[i])
        }
    }
    n = main_nums.length
    for (num in main_nums){
        for(let i = 1; i<=n; i++){
            // console.log( main_nums[num],main_nums[Number(num)] )
            if(main_nums[num] + main_nums[Number(num)+i] == target_num){
              console.log('Array number and target number',main_nums[num],',',main_nums[Number(num)+i], '=', target_num) 
            }
        }
    }
}


function RandomPickofArraySum(nums, maxAttempts = 100) {
    let sorted_nums = [...nums].sort((a, b) => a - b);

    let main_nums = [];
    let target_num = 0;
    let n = sorted_nums.length;

    for (let i = 0; i < n; i++) {
        if (sorted_nums[i] !== sorted_nums[i - 1]) {
            main_nums.push(sorted_nums[i]);
        }
    }

    n = main_nums.length;

    let attempt = 0;
    while (attempt < maxAttempts) {
        let indexA = Math.floor(Math.random() * n);
        let indexB = Math.floor(Math.random() * n);

        if (indexA !== indexB) {
            let a = main_nums[indexA];
            let b = main_nums[indexB];
            target_num = a + b;

            console.log('Random pick of 2 arrays to get a target number= (', main_nums, ',', target_num, ')', '[', a, ',', b, ']');
            return;
        }
        attempt++;
    }

    console.log('Failed to find different indices after', maxAttempts, 'attempts.');
}


let nums = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arraySum_target(nums, 14)

RandomPickofArraySum(nums)


