const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
    const customers = [
        {id: 1, firstName: 'Marko', lastName: 'Krtolica'},
        {id: 2, firstName: 'Markony', lastName: 'Test'},
        {id: 3, firstName: 'Plavic', lastName: 'Test1'},
      ];

      res.json(customers);
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});