function chatLogger(array){

    let finalChat = [];


    for (let i = 0; i < array.length; i++) {
        
        let currentCommand = array[i].split(' ');

      if (currentCommand[0] === 'Chat') {

        finalChat.push(currentCommand[1]);

      } else if (currentCommand[0] === 'Delete') {

        let message = currentCommand[1];
        let index = finalChat.indexOf(message);

        if (index !== -1) {
            finalChat.splice(index, 1);
        }


    } else if (currentCommand[0] === 'Edit') {
        
        let oldMessage = currentCommand[1];
        let newMessage = currentCommand[2];

        let index = finalChat.indexOf(oldMessage);

        if (index !== -1) {
            finalChat[index] = newMessage;
        }


    } else if (currentCommand[0] === 'Pin') {

        let message = currentCommand[1];
        let index = finalChat.indexOf(message);

        if (index !== -1) {
            finalChat.splice(index, 1);
            finalChat.push(message);
        }

    } else if (currentCommand[0] === 'Spam') {

        let messages = currentCommand.slice(1);

        for (let j = 0; j < messages.length; j++) {
            finalChat.push(messages[j]);
        }

    } else if (currentCommand[0] === 'end') {
        break;
    }
}

console.log(finalChat.join('\n'));

}

chatLogger(["Chat Hello", "Chat darling", "Edit darling Darling", "Spam how are you",
"Delete Darling", "end"]);


