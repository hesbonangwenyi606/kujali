// Use CommonJS require instead of import
const { AddNoteToBudgetCommand } = require('./add-note.command');
const { AddNoteToBudgetHandler } = require('./add-note.handler');

// Fake repository for testing
const fakeRepository = {
  addNote: async (note) => {
    console.log('Note saved:', note);
  },
};

// Create handler instance
const handler = new AddNoteToBudgetHandler(fakeRepository);

// Create a command instance
const command = new AddNoteToBudgetCommand(
  'budget-123',
  'This is a test note',
  'user-456'
);

// Execute handler
handler.execute(command)
  .then(() => {
    console.log('Command executed successfully');
  })
  .catch(err => {
    console.error('Error:', err.message);
  });

