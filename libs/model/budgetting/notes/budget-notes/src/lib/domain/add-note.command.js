export class AddNoteToBudgetCommand {
  constructor(budgetId, content, createdBy) {
    this.budgetId = budgetId;
    this.content = content;
    this.createdBy = createdBy;
  }
}

