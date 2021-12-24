// use localStorage as your Database
// getDb = localStorage.getItem("shopping_Cart");
const addToDatabase = (id) => {
  const exists = getDb();
  let shopping_Cart = {};
  if (!exists) {
    shopping_Cart[id] = 1;
  } else {
    shopping_Cart = JSON.parse(exists);
    if (shopping_Cart[id]) {
      const newCount = shopping_Cart[id] + 1;
      shopping_Cart[id] = newCount;
    } else {
      shopping_Cart[id] = 1;
    }
  }
  updateDb(shopping_Cart);
};
const getDb = () => localStorage.getItem("shopping_Cart");

const updateDb = (cart) => {
  localStorage.setItem("shopping_Cart", JSON.stringify(cart));
};

const removeFromDb = (id) => {
  const exists = getDb();
  if (!exists) {
    //there is no code to execute 
  } else {
    const shopping_Cart = JSON.parse(exists);
    delete shopping_Cart[id];
    updateDb(shopping_Cart);
  }
};

export { addToDatabase, removeFromDb as deleteFromDb };
