/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (element == null) {
      throw new Error("Элемент не существует");
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const newIncomeBtn = this.element.querySelector('.create-income-button');
    const newExpenseBtn = this.element.querySelector('.create-expense-button');

    newExpenseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal("newExpense").open();
    });

    newIncomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal("newIncome").open();
    })
  }
}
