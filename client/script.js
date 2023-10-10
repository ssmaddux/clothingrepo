


btn.addEventListener("click", async () => {
    const dicUrlApi = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    
    // Gets the value (char) of the input
    const inpWord = document.getElementById("inp-word").value.toLowerCase();
    console.log(inpWord);

    try {
        // Make the API request
        let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpWord}`);
        const wordData = response.data[0];
        console.log(wordData)
        console.log(response)


    // Error message
    } catch (error) {
        // Show an error message in a popup
        alert(`Error: Word was not found in dictionary API/database! Please re-enter a valid term!`);
        wordName.innerHTML = ``
        pos.innerHTML = ``
        phonetic.innerHTML = ``
        ex.innerHTML = ``
        def.innerHTML = ``
        dicDefaultImage.innerHTML = ``
        toggleButton.style.display = "none";
        wordPronunciation.style.display = "none"; // Make image invisable if none exist
    }
});