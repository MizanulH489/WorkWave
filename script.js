document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chat-input");
    const sendChatButton = document.getElementById("send-chat");
    const chatMessages = document.getElementById("chat-messages");
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Send chat message
    sendChatButton.addEventListener("click", () => {
        const message = chatInput.value;
        if (message.trim() !== "") {
            const chatItem = document.createElement("div");
            chatItem.innerText = message;
            chatMessages.appendChild(chatItem);
            chatInput.value = "";
        }
    });

    // Add a new task
    addTaskButton.addEventListener("click", () => {
        const task = taskInput.value;
        if (task.trim() !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerText = task;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });
});
