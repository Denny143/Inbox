pragma solidity ^0.4.25;

contract Inbox {
    string public message;
    function Inbox(string intialMessage) public {
        message = intialMessage;
    }
    function setmessage(string newMessage) public {
        message =newMessage;
    }
}