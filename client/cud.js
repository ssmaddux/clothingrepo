
    const baseUrl = "http://localhost:3001/";
    const createShirtsButton = document.getElementById("create")
    const shirtSizeInput = document.getElementById("size").value
    const shirtColorInput = document.getElementById("color").value
    const shirtPriceInput = document.getElementById("price").value
    
    createShirtsButton.addEventListener('click', async () => {
      try {
        // Send a POST request to the /shirts endpoint with the shirt data.
        const response = await axios.post(`${baseUrl}shirts`, {
          size: shirtSizeInput,
          color: shirtColorInput,
          price: shirtPriceInput
        })
    
        // Handle the response (e.g., show a success message).
        console.log('Shirt created:', response.data)
      } catch (error) {
        // Handle any errors that occur during the POST request.
        console.error('Error creating shirt:', error)
      }
    })


    updateShirtsButton.addEventListener('click', async () => {
        const shirtId = shirtIdInput.value; // Get the shirt's ID from the input field.
        
        try {
          // Send a PUT or PATCH request to the /shirts/:id endpoint with the updated shirt data.
          const response = await axios.put(`${baseUrl}shirts/${shirtId}`, {
            size: updatedShirtSizeInput,
            color: updatedShirtColorInput,
            price: updatedShirtPriceInput
          });
      
          // Handle the response (e.g., show a success message).
          console.log('Shirt updated:', response.data);
        } catch (error) {
          // Handle any errors that occur during the PUT or PATCH request.
          console.error('Error updating shirt:', error);
        }
      });
    
   