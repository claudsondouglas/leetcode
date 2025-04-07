
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let start = new ListNode(0);
    let current = start;

    let remainder = 0;
    while(l1 != null || l2 != null || remainder != 0) {
        const val1 = l1?.val ?? 0;
        const val2 = l2?.val ?? 0;

        const sum = val1 + val2 + remainder;
        remainder = Math.floor(sum / 10)

        current.next = new ListNode(sum % 10);
        current = current.next

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return start.next;
};

console.log(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4)))), '=', [7, 0, 8])

