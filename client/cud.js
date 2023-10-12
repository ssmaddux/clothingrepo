
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
    
   