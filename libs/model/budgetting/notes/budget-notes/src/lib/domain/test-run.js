import { AddNoteToBudgetCommand } from './add-note.command.js';
import { AddNoteToBudgetHandler } from './add-note.handler.js';

const fakeRepository = {
  addNote: async (note) => console.log('Note saved:', note)
};

const handler = new AddNoteToBudgetHandler(fakeRepository);

const command = new AddNoteToBudgetCommand('budget-123', 'This is a test note', 'user-456');

handler.execute(command)
  .then(() => console.log('Command executed successfully'))
  .catch(err => console.error('Error:', err.message));

