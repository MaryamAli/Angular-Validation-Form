let HomeController = function (ContactService) {

  // console.log(PARSE);

  let vm = this;

  vm.title ='Ready to add some Snapple Facts?';

//   vm.getAll = getAll();

//   function getAll () {
//     ContactService.getAllContacts().then( (response) => {
//       vm.allContacts = response.data.results;
//       console.log(vm.allContacts);
//     });
//   }

// };
  ContactService.getAllContacts().then((response) =>{
    vm.contacts = response.data.results;
    console.log(vm.contacts);
    return vm.contacts;
  });

};
HomeController.$inject = ['ContactService'];

export default HomeController;