function ContactController() {
  var vm = this;

  vm.name = "Todd"
  vm.email = "Todd@ddot.com"
  vm.phone = "911"
 
  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module("app")
  .controller("ContactController", ContactController)