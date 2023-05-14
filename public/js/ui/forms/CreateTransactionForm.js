/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element)
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    let listAcc = this.element.querySelector(".accounts-select");
    listAcc.innerHTML = "";
    const user = User.current();
    if (user) {
      Account.list(user, (err, res) => {
        if (res && res.success){
          for (let el of res.data){
            listAcc.innerHTML += `<option value="${el.id}">${el.name}</option>`
          }

        }else {
          alert(err)
        }
      })
    }
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err, res) => {
      if (res.success) {
        this.element.reset()
        if (this.element.id == "new-expense-form"){
          App.getModal("newExpense").close();
        }else {
          App.getModal("newIncome").close();
        }
        App.update();
      } else {
        alert(err);
      }
    })
  }
}