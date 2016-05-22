# Socket.io chat
**Task:**

****

**Socket.io multiplayer chat with use Node.js server**

    The server side with basic knowledge of client-side
    Multiplayer chat

    You must implement multi-user chat. The server must serve
    node.js a process running in single instance and handle the requests from
    browser. node.js should not use the database, all the information you need
    process in memory process.
    During the first call from the browser to the node.js-process - needs to happen
    authorization (enter a simple name in the form), then any way
    creates a temporary session (before closing the browser window) and the user sees
    in front of the screen, consisting of three zones:
    ● the main window (which contains the messages for the chat)
    ● the list of those present interlocutors (to the right of the main window)
    ● line input a new message (bottom of the main chat window)
    you also need to implement a button:
    ● sending a message (also happens on pressing Enter in the input line)
    ● logout
    After login, the user only sees the new messages, the message history
    before the advent of user to store and display is not necessary. List
    users needs to reflect real-time changes in the composition
    chat participants to respond to the entered/exited/closed the browser window).
    Entered message should be seen by every participant in the conversation, including the author
    the form:
    

> [15:28:31] Username: message Text

    Interface elements in the sum should occupy the entire screen area
    to respond
    on resize of the browser window. For registration and
    the adaptability of the organization encouraged the use of bootstrap or other
    similar to the css library and the interface in General needs to look neat.
    To organize js code needs jQuery to be used, the use of MV*
    frameworks are not allowed.The chat should work in modern versions of Google Chrome browser, support
    cross-browser is not required.
