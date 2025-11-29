import { AddNoteToBudgetCommand } from './add-note.command';

export interface ICommandHandler<TCommand> {
  execute(command: TCommand): Promise<void>;
}

// Example result type if needed
export interface AddNoteToBudgetResult {
  success: boolean;
}

export class AddNoteToBudgetHandler implements ICommandHandler<AddNoteToBudgetCommand> {
  async execute(command: AddNoteToBudgetCommand): Promise<void> {
    // Simple validation
    if (!command.budgetId || !command.content) {
      throw new Error('Budget ID and content are required');
    }

    // Call repository/service here
    console.log(`Adding note to budget ${command.budgetId}: ${command.content}`);
  }
}
