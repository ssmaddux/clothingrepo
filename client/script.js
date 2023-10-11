const btn = document.getElementById("search-btn");
const base_Url = "http://localhost:3001/";
const pantsContent = document.getElementById("pants");
const shortsContent = document.getElementById("shorts");
const shirtsContent = document.getElementById("shirts");


pants.addEventListener("click", async () => {
    async function getAllPants() {
        try {
            // Make the API request
            const response = await axios.get(`${base_Url}pants`);
            
            if (response.data.length > 0) {
                // Clear the pantsContent before appending new data
                pantsContent.innerHTML = "";
                
                response.data.forEach(pantsInfo => {
                    // Display each pantsInfo object attribute
                    pantsContent.innerHTML += 
                    `
                        <p>Waist Size: ${pantsInfo.waist_size}</p>
                        <p>Length Size: ${pantsInfo.length_size}</p>
                        <p>Color: ${pantsInfo.color}</p>
                        <hr> <!-- Add a horizontal line to separate each entry -->
                    `;
                });
            } else {
                // Show a message if no data is returned
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

shorts.addEventListener("click", async () => {
    async function getAllShorts() {
        try {
            // Make the API request
            const response = await axios.get(`${base_Url}shorts`);
            
            if (response.data.length > 0) {
                // Clear the pantsContent before appending new data
                shortsContent.innerHTML = "";
                
                response.data.forEach(shortsInfo => {
                    // Display each pantsInfo object attribute
                    shortsContent.innerHTML += 
                    `
                        <p>Size: ${shortsInfo.size}</p>
                        <p>Color: ${shortsInfo.color}</p>
                        <hr> <!-- Add a horizontal line to separate each entry -->
                    `;
                });
            } else {
                // Show a message if no data is returned
                shortsContent.innerHTML = "No shorts found.";
            }
        } catch (error) {
            // Show an error message in a popup or log it to the console
            console.error("Error:", error);
            shortsContent.innerHTML = "Error: Item was not found in our database! Please re-enter a valid item!";
        }
    }
    getAllShorts();
});

shirts.addEventListener("click", async () => {
    async function getAllshirts() {
        try {
            // Make the API request
            const response = await axios.get(`${base_Url}shirts`);
            
            if (response.data.length > 0) {
                // Clear the pantsContent before appending new data
                shirtsContent.innerHTML = "";
                
                response.data.forEach(shirtsInfo => {
                    // Display each pantsInfo object attribute
                    shirtsContent.innerHTML += 
                    `
                        <p>Size: ${shirtsInfo.size}</p>
                        <p>Color: ${shirtsInfo.color}</p>
                        <hr> <!-- Add a horizontal line to separate each entry -->
                    `;
                });
            } else {
                // Show a message if no data is returned
                shirtsContent.innerHTML = "No shirts found.";
            }
        } catch (error) {
            // Show an error message in a popup or log it to the console
            console.error("Error:", error);
            shirtsContent.innerHTML = "Error: Item was not found in our database! Please re-enter a valid item!";
        }
    }
    getAllshirts();
});
