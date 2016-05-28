# Socket.io chat

![](https://lh3.googleusercontent.com/ZX4Lvr0dI6_PAcoYyatE2SNvO9LaRPzWhJAGn8Tr8nemLhsVfO1nvbr0YgkVIHF6Twcvca02sm-BagBPuvWOgPBbYfnh79BysMLnjqhwAc0Ev2YCSLBb-a_Wk7iE-qxUgt4wHVERy3dIwW-ys9ZdWdx22q3GcqjpNZaamHH-P5Veru0LlV2C1Z_8Az1uze7KqiKi8UxAR-6F2Ph6Dypq9SgXMPmfIhYRQmvpepAHmfNG9O_v40sy9-eXcguWEbxwPxZDiSEkodg1uAAac8AoD5BXgkkRVfjWrYbH_7gLSWuDI-y6HXDIo_LX2jMFk_09ML0X8gZeekxS6bj1XQT9BOvoHuiBUJfMni19zSL_2OuK36ErF-4mLecbdUaX4YYuQtyH7bJ-u1InyiWzo9IT4j8Mrgzjuu9rsWe5zDEdOWapOinTgyA1ryBAuCT0VCoHsmndJSyIlgFz5EBpxz3YoR5a4dn8KCo_LSC3JefyD3FEaEdM6cY_DO1cH5dA0cUjT6RYMWBRdGjYjLTN0O3GDt5i4pFL52NARVWVxFSaqLWaiFr5HnEG-jyBHP082hwzb80NMgt0q1jMuv3yLtm6YTdc-jQDrQg=w1211-h939-no)

![](https://lh3.googleusercontent.com/J5fE2dmf5qlV_SnrPdhQVEYfCrNhV8ffO95QtfuN9q0FavEZmZSVH9EhckQxp0_A4DRKrwopGOcvqrz02LwXPHhW8fwpylUenDr2-x_jsQ0XoRBCrZzYAnkDmT-5NdtqflbE30KB1qQu2F2IQyP_3haphXcGsZWtBbtH8o1XvXd-3KMTgSG_Wi4TQarFNnHGj21BIRGIvoY-DbhJy_FUFLxqMQbbwVQ839sI-9jRW59JnFWu9H45hRAEQi6HYiZDgFw4tB5SmZpMw5apc6rCM7hamFhtzvRdYhema6Lf7zqtA9A_PEbSAWbAe8uRP1E8ze4cGbc5PmEw1GZlwoA5T0SgT3G0sS0ahwA2pyLVTCNjFtRyTnZ5DJR35SPIMmQfzkIJENgnUtgcrqYGK1dABVGphtylDrbd4D8uvSDrlAe9eT8xwh9cyMM_r_bUN967JbcJrv8AoBFamrlZWea-eGGu9zEF5Yvbe7pySVOaASyONvlozpkF3hF1Lp-c1RXtSPYrNCgK5U62p5NNwccgyweJ00YG9qyWMb84kfRLY5dYKwojcZxrBljpDuC8twoZ59AbXaIBThEL98M_kKJAO2nLR0D-PTc=w399-h737-no)

**Task:**

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

