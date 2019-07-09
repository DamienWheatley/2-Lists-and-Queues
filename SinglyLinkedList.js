const head = Symbol("head");

class LinkedListNode {
    constructor(data){
        this.data = data; //value 
        this.next = null; //next item
    };
}

class LinkedList {
    constructor(){
        this[head] = null; //linked list contains only the first value
    }

    addItemToEndOfList(data){ //function to add item to the end of the list
        const newNode = new LinkedListNode(data); 

        if(this[head] === null){            
            this[head] = newNode; //if there is no value at the head of the list, assign the new node to "head"
        } else {
            let current = this[head];
            while(current.next !== null){ //otherwise follow the list through to the last item (next item will always be null) ...
                current = current.next;
            };
            current.next = newNode; //... and create the new item 
        };
    };

    addItemToListAtIndex(index,data){
        const newNode = new LinkedListNode(data); 
        let current = this[head];
        let previous = null;
        let i = 0;

        if(this[head] === null){ //if list is empty, make new value "head"
            this[head] = newNode;
            return `The list was empty, so ${data} was added to the start of the list.`;
        };

        if(index === 0){ //if index is 0 (probably not only item, but if it is then the first "if" statement will catch it)
            current = newNode; 
            current.next = this[head];
            this[head] = current;
        };

        if(index > 0){
            while(i < index && current !== null){
                previous = current;
                current = current.next;
                i++;
            };
            newNode.next = current;
            previous.next = newNode;
        } else {
            return `Index ${index} does not exist in this list`;
        };
    };

    getFromListAtIndex(index){ //function to get the value at a given index
        if(index > -1){
            let current = this[head];
            let i = 0;

            while(current !== null && i < index){
                current = current.next; //iterate through the list until "i" is no longer smaller than index, in effect setting "current" as the value at "index" #
                i++;
            };

            if(current !== null){
                return current.data; //returns the value of "current" unless it's empty.
            } else {
                return "There is not an item at that index.";
            };
        };
    };

    removeNodeFromListAtIndex(index){
        if(this[head] === null || index < 0){
            return `Index ${index} does not exist in this list`; //throw an error if index is less than 0
        };

        if(index === 0){ //if index is first item
            const data = this[head].data; //store "head" data
            this[head] = this[head].next; //set "head" as next item
            return `Removed the first item in the list containing: ${data}`;
        };
            
        let current = this[head];
        let previous = null;
        let i = 0;

        while(current !== null && i < index ){ //when we reach the given index and it's not null
            previous = current; //set previous as the current item 
            current = current.next; //current item moves to the next item
            i++;
        };

        if(current !== null){
            previous.next = current.next; //previous.next is the item to be deleted, so we replace it with the item after the item to be deleted
            return `Removed item from index ${index} containing: ${current.data}`;
        };

        return `Index ${index} does not exist in this list`;
    };

    *displayAllValuesInList(){
        let current = this[head];

        while(current !== null){ 
            yield current.data;
            current = current.next;
        };
    };

    getLength(){
        let allItems = [...newLinkedList.displayAllValuesInList()];
        return allItems.length;
    };
}

let newLinkedList = new LinkedList;
let allItems = [...newLinkedList.displayAllValuesInList()];

//newLinkedList.addItemToEndOfList(23);
newLinkedList.addItemToEndOfList(102);

// newLinkedList.addItemToEndOfList(76);
allItems = [...newLinkedList.displayAllValuesInList()];
// console.log(allItems);

// newLinkedList.addItemToEndOfList(2);
// allItems = [...newLinkedList.displayAllValuesInList()];
// console.log(allItems);

newLinkedList.addItemToListAtIndex(0,99);
allItems = [...newLinkedList.displayAllValuesInList()];
console.log(allItems);
module.exports.LinkedList = LinkedList;
module.exports.LinkedListNode = LinkedListNode;
