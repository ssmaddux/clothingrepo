const btn = document.getElementById("search-btn");

pants.addEventListener("click", async () => {
    const base_Url = "http://localhost:3001/";

    const pantsContent = document.getElementById("pants");

    async function getAllPants() {
        try {
            // Make the API request
            const response = await axios.get(`${base_Url}pants`);
            
            if (response.data.length > 0) {
                const pantsInfo = response.data[0];
                // Assuming pantsInfo is an object with properties you want to display
                pantsContent.innerHTML = `
                    <p>Waist Size: ${pantsInfo.waist_size}</p>
                    <p>Length Size: ${pantsInfo.length_size}</p>
                    <p>Color: ${pantsInfo.color}</p>
                `;
            } else {
                // Show an error message if no data is returned
                pantsContent.innerHTML = "No pants found.";
            }
        } catch (error) {
            // Show an error message in a popup or log it to the console
            console.error("Error:", error);
            pantsContent.innerHTML = "Error: Item was not found in our database! Please re-enter a valid item!";
        }
    }

    getAllPants();
});
