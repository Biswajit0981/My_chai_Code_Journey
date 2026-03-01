class Solution {
    /**
     * Removes every k-th node from a singly linked list.
     * @param {ListNode|null} head - The head of the linked list.
     * @param {number} k - The interval (1‑based) of nodes to remove.
     * @return {ListNode|null} The head of the modified list.
     */
    removeEveryKthNode(head, k) {
        if (head === null || this.lengthOfList(head) === k) return null;
        let temp = head;

        while (temp !== null) {
            let current = temp;
            while (current !== null && k > 1) {
                current = current.next;
                k--;
            }
            temp.next = current.next;
            temp = current.next;
        }

        return head; // return the new head (null if the list becomes empty)
    }

    lengthOfList(head) {
        let current = head;
        let count = 0;

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count
    }
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Definition for singly‑linked list node (for reference).
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */