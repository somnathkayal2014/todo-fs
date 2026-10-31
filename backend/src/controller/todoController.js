// import todoSchema from "../models/todoSchema.js";
import todoSchema from "../models/todoSchema.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const data = await todoSchema.create({ title });
    if (data) {
      return res.status(201).json({
        success: true,
        message: "Todo created successfully",
        data,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const data = await todoSchema.find({});
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Todo Fetched successfully",
        data,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const { title } = req.body;
    const data = await todoSchema.findOne({ _id: todoId });
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Todo Not Found",
      });
    }
    data.title = title;
    data.updatedAt = Date.now();
    await data.save();
    return res.status(200).json({
      success: true,
      message: "Todo Updated",
      data,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const delTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const data = await todoSchema.findByIdAndDelete({ _id: todoId });
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Todo deleted successfully",
        data,
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
