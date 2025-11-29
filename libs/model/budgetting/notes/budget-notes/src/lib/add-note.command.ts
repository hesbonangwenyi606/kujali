export class AddNoteToBudgetCommand {
  constructor(
    public readonly budgetId: string,
    public readonly content: string,
    public readonly createdBy: string
  ) {}
}
