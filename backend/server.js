import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!"
    },
    {
      id: 2,
      setup: "What do you call a bear with no teeth?",
      punchline: "A gummy bear!"
    },
    {
      id: 3,
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!"
    },
    {
      id: 4,
      setup: "What do you call a fake noodle?",
      punchline: "An impasta!"
    },
    {
      id: 5,
      setup: "Why don't eggs tell jokes?",
      punchline: "They'd crack each other up!"
    }
  ];
  res.json(jokes);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});