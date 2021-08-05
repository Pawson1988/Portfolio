

const jokes = document.getElementById("jokes");
const jokeButton = document.getElementById("button");



let jokeFunc = async () => {
    try {
        const GetdadJoke = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}});
        console.log(GetdadJoke.data.joke)
        jokes.innerText = GetdadJoke.data.joke;
    } catch (err) {
        console.log(err);
    }
}

jokeButton.addEventListener("click", () => {
    jokeFunc();
});

// setInterval(() => {
//     jokeFunc()
// }, 15000);