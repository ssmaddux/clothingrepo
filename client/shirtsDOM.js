document.addEventListener("DOMContentLoaded", function () {
    const base_Url = "http://localhost:3001/";
    const shirtsContent = document.getElementById("shirtsInsert");
  
    async function getAllShirts() {
      try {
        // Make the API request
        const response = await axios.get(`${base_Url}shirts`);
        
        if (response.data.length > 0) {
            // Clear the shirtsContent before appending new data
            shirtsContent.innerHTML = "";
            response.data.forEach(shirtInfo => {
                // Display each shirtInfo object attribute
                shirtsContent.innerHTML += 
                `
                    <p>Size: ${shirtInfo.size}</p>
                    <p>Color: ${shirtInfo.color}</p>
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
        shirtsContent.innerHTML = "Error: Item was not found in our database! Please re-enter a valid item.";
      }
    }
    getAllShirts();
  });
  