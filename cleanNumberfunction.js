
function grouped_num(nums){
    let sorted_nums = nums.sort((a, b) => a - b);
    let main_nums = []

    let same_nums = []

    let n = sorted_nums.length

    for(let i = 0; i< n; i++){
        //   console.log(sorted_nums[i])
        if (i === 0 || sorted_nums[i] === sorted_nums[i - 1]){
            same_nums.push(sorted_nums[i])
        }
        else{
            main_nums.push(same_nums)
            same_nums = [sorted_nums[i]]
        }
    }
    // main.nums.push(same_nums)
    main_nums.push(same_nums)
    console.log(main_nums)
}

let nums = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

grouped_num(nums)
    