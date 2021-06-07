// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;
pragma abicoder v2;

contract Tasks {
    // Global Tasks
    mapping(uint256 => Task) public myTasks;
    uint256 public nextTaskId = 0;

    struct Task {
        string name;
        string date;
        bool reminder;
        string description;
    }

    // Contract owner
    address public owner;

    constructor() {
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
        myTasks[nextTaskId] = Task(_name, _date, _reminder, _description);
        nextTaskId++;
        emit addTaskEvent();
    }

    function getTask(uint256 _id) public view returns (Task memory) {
        return myTasks[_id];
    }
}
