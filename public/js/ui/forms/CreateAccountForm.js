/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    this.element.reset();
    Account.create(data, (err, res) => {
      if (res.success) {
        App.getModal('createAccount').close();
        App.update();
      }
    })
  }
}