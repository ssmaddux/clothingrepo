document.addEventListener("DOMContentLoaded", function () {
    const base_Url = "http://localhost:3001/";
    const pantsContent = document.getElementById("pantsInsert");
  
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
  
