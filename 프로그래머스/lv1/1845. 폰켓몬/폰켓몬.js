// 중복제거 - SET
function solution(nums) {
    const SET = new Set(nums)
    return SET.size < nums.length / 2 ? SET.size : nums.length / 2
}