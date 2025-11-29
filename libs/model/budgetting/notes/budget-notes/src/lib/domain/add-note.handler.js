const { AddNoteToBudgetCommand } = require('./add-note.command');

class AddNoteToBudgetHandler {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(command) {
    await this.repository.addNote({
      budgetId: command.budgetId,
      content: command.content,
      createdBy: command.createdBy
    });
  }
}

module.exports = { AddNoteToBudgetHandler };
