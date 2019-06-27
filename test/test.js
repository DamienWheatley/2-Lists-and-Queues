let should = require('chai').should();

const newLinkedList = require('../SinglyLinkedList.js');
const linkedListNode = require('../SinglyLinkedList.js');

describe("Singly Linked List", () => {

    describe("Adding element to empty list", () => {
        //Arrange - create the class you're going to test, and any dependencies.

        let linkedList = newLinkedList;
        let newList = linkedListNode;
        let index = 0;
        let value = 66;

        //Act - do the thing which you want to check is correct.
        newList.prototype.addItemToListAtIndex(index,value);
        
        //Assert - check that the right thing happened.
        linkedList.size.should.equal(0)
        newList.size.should.equal(1);

    });
})
