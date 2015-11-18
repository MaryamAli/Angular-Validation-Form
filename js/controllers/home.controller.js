let HomeController = function (ContactService, $scope) {

  // console.log(PARSE);

  let vm = this;

  vm.title ='Ready to add some Snapple Facts?';

  vm.getAll = getAll();

  function getAll () {
    ContactService.getAllContacts().then( (response) => {
      vm.allContacts = response.data.results;
      console.log(vm.allContacts);
    });
  }

};

HomeController.$inject = ['ContactService', '$scope'];

export default HomeController;