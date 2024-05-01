function easterEggs(input) {
    const regex = /[@#]([a-z]{3,})[^a-z\d]*\/(\d+)\//gi;

    const validEggs = [];
    let match;

    while ((match = regex.exec(input)) !== null) {
        const color = match[1];
        const count = match[2];
        validEggs.push({ color, count });
    }

    if (validEggs.length > 0) {
        const output = validEggs.map(egg => `${egg.count} ${egg.color}`).join(', ');
        console.log(`You found ${output} eggs!`);
    } else {
        console.log("No eggs found.");
    }
}

easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
