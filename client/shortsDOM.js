document.addEventListener("DOMContentLoaded", function () {
const base_Url = "http://localhost:3001/";
const shortsContent = document.getElementById("shortsInsert");

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
