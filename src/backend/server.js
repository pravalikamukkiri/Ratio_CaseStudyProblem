const express = require('express');
const mongoose = require('mongoose');
const Item = require('../db/schema');

const app = express();
const port = 3000;
const itemsDictionary = {};

mongoose.connect('mongodb://localhost:27017/RatioDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
console.log('MongoDB connectedd');
fetchItems();
}
).catch(err => console.log('MongoDB connection error:', err));

app.use(express.json());

function fetchItems() {
  Item.find({})
    .then(items => {
      console.log(items);
      items.forEach(item => {
          itemsDictionary[item.customId] = item;  // Store each item in the dictionary using customId as key
        });
      console.log(itemsDictionary);
    })
    .catch(error => {
      console.error('Error retrieving items from database', error);
    });
}

app.get('/items/:customId', async (req, res) => {
  const { customId } = req.params;
  try {
    const item = await Item.findOne({ customId });
    console.log("specific");
    console.log(item);
    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Item not found');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.post('/nextPage', (req, res) => {
  console.log(req);
  console.log(req.body);
  const { currentPage, buttonId, itemId } = req.body;
  let nextPage = null;
  let newItemId = "";
  switch (currentPage) {
    case 1:
      nextPage = 2;
      newItemId = "1";
      break;
    case 2:
      nextPage = 3;
      switch (buttonId) {
        case 1:
          newItemId = "2.1";
          break;
        case 2:
          newItemId = "2.2";
          break;
        case 3:
          newItemId = "2.3";
          break;
         default:
          newItemId = "2.1";
          break;
      }
      break;
    case 3:
          nextPage = 4;
          switch (buttonId) {
              case 1:
                newItemId = String(itemId)+".1";
                break;
              case 2:
                newItemId = String(itemId)+".2";
                break;
              case 3:
                newItemId = String(itemId)+".3";
                break;
               default:
                newItemId = String(itemId)+".1";
                break;
            }
            break;
          break;
    case 4:
        nextPage = 5;
        newItemId = "1";
        break;
    case 5:
        nextPage =1;
        newItemId = "1";
        break;
    default:
      nextPage = 1;
      break;
  }
  res.json({ "nextPage":nextPage, "itemId":newItemId });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
