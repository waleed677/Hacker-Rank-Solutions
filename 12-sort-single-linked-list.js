
class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

let linkedList1 = new LinkedList(1);
linkedList1.next = new LinkedList(2);
linkedList1.next.next = new LinkedList(3);


let linkedList2 = new LinkedList(3);
linkedList2.next = new LinkedList(4);


const mergeLists = (head1, head2) => {
    let curr1 = head1;
    let curr2 = head2;
    let dummy = new LinkedList();
    let curr = dummy;

    while (curr1 || curr2) {
        if (!curr1) {
            curr.next = curr2;
            break;
        } else if (!curr2) {
            curr.next = curr1;
            break;
        } else if (curr1.data <= curr2.data) {
            curr.next = curr1;
            curr1 = curr1.next;
        } else {
            curr.next = curr2;
            curr2 = curr2.next;
        }
        curr = curr.next;
    }

    let res = dummy.next;
    while (res) {
        console.log(res.data);
        res = res.next;
    }

    return dummy.next;
    
    


}
mergeLists(linkedList1, linkedList2);

// const sortLinkedList = (head1, head2) => {
//     if (!head || !head.next) return head;

//     let curr = head;
//     console.log(curr);


//     while (curr.next !== null) {
//         if(curr.data > curr.next.data) {
//             let temp = curr.data;
//             curr.data = curr.next.data;
//             curr.next.data = temp;
//         }
//         curr = curr.next;
//     }

//      console.log(head
//         );


// }

