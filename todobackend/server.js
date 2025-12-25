const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const Add = require("./models/addtodos")
const mongoose = require("mongoose");
const addtodos = require('./models/addtodos');
mongoose.connect("mongodb://127.0.0.1:27017/todos")
  .then(() => {
    console.log('mongo db is successfully connected');
  }).catch((error) => {
    console.log(error);
  });
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
// ADD TODOS Api
app.post('/dataget', async (req, res) => {
  const list = new Add(req.body);
  await list.save()
  console.log('this is the api', list);
  return res.status(200).json({
    status: true,
    message: "data is received",
    user: list,
  });
});
// Dashboard Api
app.get("/dashboard", async (req, res) => {
  const todos = await addtodos.find({ completed: false });
  return res.status(200).json({
    status: true,
    message: "Todos fetched successfully",
    data: todos,
  })
});
// Complete Api
app.get("/completed", async (req, res) => {
  const todos = await addtodos.find({ completed: true });
  return res.status(200).json({
    status: true,
    message: "Completed todos fetched successfully",
    data: todos,
  })
});
app.get("/complete-task/:id", async (req, res) => {
  const { id } = req.params;

  const updatedTodo = await Add.findByIdAndUpdate(
    id,
    { completed: true },
    { new: true }
  );
  return res.status(200).json({
    status: true,
    message: "Task completed successfully",
    data: updatedTodo,
  });
})
// UPDATE Api
app.put('/update/:id', async (req, res) => {
  const { id } = req.params

  console.log("ID:", id);
  console.log("BODY:", req.body);
  const Updatetodo = await Add.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  )
  return res.status(200).json({
    status: true,
    message: "Todo updated successfully",
    data: Updatetodo,
  });
});
// DELETE Api
app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  const Deletetodo = await Add.findByIdAndDelete(id)
  return res.status(200).json({
    status: true,
    message: "Todo deleted successfully",
    data: Deletetodo,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})