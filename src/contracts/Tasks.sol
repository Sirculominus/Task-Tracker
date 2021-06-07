// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;
pragma abicoder v2;

contract Tasks {
    // Mapping to tasks
    mapping(address => mapping(uint256 => Task)) public myTasks;
    mapping(address => Users) public users;

    struct Users {
        address userAddress;
        uint256 tasks;
        bool isValue;
    }

    struct Task {
        string name;
        string date;
        bool reminder;
        string description;
    }

    // Contract owner
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    // Event addtask
    event addTaskEvent();

    function addTask(
        string memory _name,
        string memory _date,
        bool _reminder,
        string memory _description
    ) public {
        uint256 id;
        if (!users[msg.sender].isValue) {
            users[msg.sender].isValue = true;
            users[msg.sender].tasks = 1;
            id = 1;
        } else {
            id = users[msg.sender].tasks;
        }
        myTasks[msg.sender][id] = Task(_name, _date, _reminder, _description);
        users[msg.sender].tasks++;
        emit addTaskEvent();
    }

    function getTask(uint256 _id) public view returns (Task memory) {
        return myTasks[msg.sender][_id];
    }

    function getTasksAmount() public view returns (uint256) {
        if (!users[msg.sender].isValue) {
            return 0;
        }
        return users[msg.sender].tasks - 1;
    }
}
