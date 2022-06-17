//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NoteContract {

    mapping(address=>string[]) public notes;

    // 创建笔记事件
    event NewNote(address own, string note);
    // 更改笔记事件
    event ModifyNote(address own, uint index);

    function addNote(string memory note) public {
        notes[msg.sender].push(note);

        emit NewNote(msg.sender, note);
    }

    function getNotesLen(address own) public view returns(uint) {
        return notes[own].length;
    }

    function modifyNote(address own, uint index, string memory newNote) public {
        require(own == msg.sender);
        notes[own][index] = newNote;
        
        emit ModifyNote(own, index);
    }
}