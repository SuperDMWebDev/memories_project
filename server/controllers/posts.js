const postMessage = require('../models/postMessage');
export const getPost = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    console.log(postMessage);

    res.status(200).json(postMessage);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = (req, res) => {
  const body = req.body;
  try {
  } catch (err) {
    console.log('err', err);
  }
};
