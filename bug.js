const express = require('express');
const app = express();
app.get('/', (req, res) => {
  //Simulate an asynchronous operation that sometimes fails
  const success = Math.random() < 0.5; 
  if (success) {
    res.send('Success!');
  } else {
    //Error handling missing here! The response is never sent
    throw new Error('Something went wrong!');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));