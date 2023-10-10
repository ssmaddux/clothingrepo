const btn = document.getElementById("search-btn");


btn.addEventListener("click", async () => {
    const clothingApi = "http://localhost:3001/home";
    
    // Gets the value (char) of the input
    const inpWord = document.getElementById("inp-word").value.toLowerCase();
    console.log(inpWord);

    try {
        // Make the API request
        let response = await axios.get(`http://localhost:3001/${inpWord}`);
        const wordData = response.data[0];
        console.log(wordData)
        console.log(response)


    // Error message
    } catch (error) {
        // Show an error message in a popup
        alert(`Error: Item was not found in our database! Please re-enter a valid item!`);
        wordName.innerHTML = ``
        toggleButton.style.display = "none"; // Make image invisable if none exist
    }
});