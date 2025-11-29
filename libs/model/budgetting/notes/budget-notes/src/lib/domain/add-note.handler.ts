import { AddNoteToBudgetCommand } from './add-note.command';

export interface ICommandHandler<T> {
  execute(command: T): Promise<void>;
}

export class AddNoteToBudgetHandler
  implements ICommandHandler<AddNoteToBudgetCommand>
{
  constructor(private readonly repository: any) {}

  async execute(command: AddNoteToBudgetCommand): Promise<void> {
    if (!command.content || !command.budgetId) {
      throw new Error('Budget ID and content are required');
    }

    await this.repository.addNote({
      budgetId: command.budgetId,
      content: command.content,
      createdBy: command.createdBy,
      createdAt: new Date(),
    });
  }
}
