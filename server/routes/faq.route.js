const express = require("express");
const faqRouter = express.Router();

const Question = require("../models/Question");
const Answer = require("../models/Answer");
const verifyToken = require("../middleware/verifyToken");

// Ask a Question
faqRouter.post("/ask", verifyToken, async (req, res) => {
  try {
    const { title, content } = req.body;
    const user = req.user.userId;
    const question = new Question({ title, content, user });
    await question.save();
    res.status(201).json({ message: "Question asked successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// Answer a Question
faqRouter.post("/answer/:questionId", verifyToken, async (req, res) => {
  try {
    const { content } = req.body;
    const user = req.user.userId;
    const answer = new Answer({ content, user });
    await answer.save();
    const questionId = req.params.questionId;
    const question = await Question.findById(questionId);
    question.answers.push(answer);
    await question.save();
    res.status(201).json({ message: "Answered question successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// Approve a Question
faqRouter.put("/approve/:questionId", verifyToken, async (req, res) => {
  try {
    const questionId = req.params.questionId;
    const question = await Question.findByIdAndUpdate(
      questionId,
      { $set: { isApproved: true } },
      { new: true }
    );
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// Delete a Question
faqRouter.delete("/delete/:questionId", verifyToken, async (req, res) => {
  try {
    const questionId = req.params.questionId;
    await Question.findByIdAndDelete(questionId);
    res.json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// Ban a User
faqRouter.put("/ban/:userId", verifyToken, async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { isBanned: true } },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = faqRouter;
