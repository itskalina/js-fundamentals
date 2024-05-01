function followers(input) {
    const followers = [];

    for (let line of input) {
        if (line === "Log out") {
            break;
        }

        const [command, username, value] = line.split(": ").map(x => x.trim());

        switch (command) {
            case "New follower":
                if (!followers.some(follower => follower.username === username)) {
                    followers.push({ username, likes: 0, comments: 0 });
                }
                break;
            case "Like":
                const likeIndex = followers.findIndex(follower => follower.username === username);
                if (likeIndex === -1) {
                    followers.push({ username, likes: Number(value), comments: 0 });
                } else {
                    followers[likeIndex].likes += Number(value);
                }
                break;
            case "Comment":
                const commentIndex = followers.findIndex(follower => follower.username === username);
                if (commentIndex === -1) {
                    followers.push({ username, likes: 0, comments: 1 });
                } else {
                    followers[commentIndex].comments += 1;
                }
                break;
            case "Blocked":
                const blockIndex = followers.findIndex(follower => follower.username === username);
                if (blockIndex !== -1) {
                    followers.splice(blockIndex, 1);
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
            default:
                break;
        }
    }

    console.log(`${followers.length} followers`);
    followers.forEach(follower => {
        console.log(`${follower.username}: ${follower.likes + follower.comments}`);
    });
}

followers(["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"]);
