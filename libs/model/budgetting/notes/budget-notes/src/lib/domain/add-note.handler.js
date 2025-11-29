import { AddNoteToBudgetCommand } from './add-note.command.js';

export class AddNoteToBudgetHandler {
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

