function StaffController(){
  var vm = this;

  vm.name = "Josias"
  vm.email = "JJ@pornhub.com"
  vm.phone = "311"
}

angular
  .module("app")
  .controller("StaffController", StaffController)