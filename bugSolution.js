const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    //Simulate an asynchronous operation that sometimes fails
    const success = Math.random() < 0.5; 
    if (success) {
      res.send('Success!');
    } else {
      throw new Error('Something went wrong!');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));