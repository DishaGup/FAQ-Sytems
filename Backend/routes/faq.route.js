const express = require('express');
const faqRouter = express.Router();

const Question = require('../models/Question');
const Answer = require('../models/Answer');
const verifyToken = require('../middleware/verifyToken');

// Ask a Question
faqRouter.post('/ask', verifyToken, async (req, res) => {
  try {
    const { title, content } = req.body;
    const user = req.user.userId;
    const question = new Question({ title, content, user });
    await question.save();
    res.status(201).json({ message: 'Question asked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


// Answer a Question
faqRouter.post('/answer/:questionId', verifyToken, async (req, res) => {
    try {
      const { content } = req.body;
      const user = req.user.userId;
      const answer = new Answer({ content, user });
      await answer.save();
      const questionId = req.params.questionId;
      const question = await Question.findById(questionId);
      question.answers.push(answer);
      await question.save();
      res.status(201).json({ message: 'Answered question successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  


module.exports = faqRouter;
