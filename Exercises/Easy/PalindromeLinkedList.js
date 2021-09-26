/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
     
    numbers=[]
    while (head.val!=0){
        numbers.push(head.val)
        head=head.next
    }

    numbers= numbers.toString()
    return String(numbers)===String(numbers).split("").reverse().join("")

    
};

//note this problem is a single linked list easiest solution is just to convert the list into an array 
// then perform the operation on the array.

