function simulateLoading() {
    const loadingMessages = [
        "[  OK  ] Connecting to spekie.org...",
        "[  OK  ] Initializing website environment...",
        "[  OK  ] Initializing javascript...",
        "[  OK  ] Loading script.js...",
        "[  OK  ] Initializing html...",
        "[  OK  ] Loading index.html...",
        "[  OK  ] Initializing elements...",
        "[  OK  ] Elements Initialized.",
        "[  OK  ] Initializing css...",
        "[  OK  ] Loading style.css...",
        "[  OK  ] Loading static assets...",
        "[  OK  ] Preparing cache...",
        "[  OK  ] Preparing browser session...",
        "[  OK  ] Established browser session.",
        "[  OK  ] Initializing security protocols...",
        "[  OK  ] Initializing secure connection...",
        "[  OK  ] Main started.",
        "[  OK  ] Syncing with servers...",
        "[  OK  ] All services operational.",
        "[  OK  ] Running startup scripts...",
        "[  OK  ] Startup scripts completed.",
        "[  OK  ] Finalizing initialization...",
        "[  OK  ] All systems go.",
        "[  OK  ] Website is ready.",
        "[  OK  ] Rendering home...",
        "[  OK  ] Home rendered successfully.",
        "[  OK  ] Preparing interactive components...",
        "[  OK  ] All components functional.",
        "[  OK  ] Displaying content...",
        "[  OK  ] Content displayed successfully.",
        "[  OK  ] Welcome!",
        "[  OK  ] Enjoy Your Stay...",
        "[  OK  ] Thank You for Visiting!"
    ];

    let index = 0;
    const loadingMessagesContainer = document.getElementById("loading-messages");

    function logNextMessage() {
        if (index < loadingMessages.length) {
            loadingMessagesContainer.textContent += loadingMessages[index] + '\n';
            index++;
            setTimeout(logNextMessage, 500); // Adjust timing as needed
        } else {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("container").style.display = "block";
        }
    }

    logNextMessage();
}

// Start the loading simulation
window.onload = simulateLoading;
