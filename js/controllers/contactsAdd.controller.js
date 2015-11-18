let ContactsAddController = function(ContactService, $state, $scope) {
  
  let vm =this;

  vm.title = 'Add all the facts you\'d like:';

  vm.addContact = addContact;

  function addContact (contactObj) {
    ContactService.addContact(contactObj).then( (response) => {
      console.log(response);
    });
      $state.go('root.about');
    }

  // Validate Name Entry
  let valName = (firstAndLastName) => {
    if (firstAndLastName.length <= 1) {
      $scope.ErrName = 'Please enter your first AND last name';
    } else {
      $scope.ErrName = 'Thanks';
    }
  };

  $scope.$watch('contactObj.firstAndLastName', function (firstAndLastName) {
    if (!firstAndLastName) return;
    valName(firstAndLastName);
  });

  // Validate Email Entry

  let valEmail =(email) => {
    let emailCorrect = email.indexOf('@');
    if (emailCorrect <=0) {
      $scope.ErrEmail = 'Please enter a valid email address';
    } else {
      $scope.ErrEmail ='Half-way there';
    }
  };

  $scope.$watch('contactObj.email', function (email) {
    if (!email) return;
    valEmail(email);
  });

  // Validate Website Entry

  let valWeb = (httpWeb) => {
    let okFirst = httpWeb.indexOf('http://');
    let okTwo = httpWeb.indexOf('https://');
    if ((okFirst < 0) && (okTwo <0)) {
      $scope.ErrWeb = 'Please include a site beginning with http:// or https://';
    } else {
      $scope.ErrWeb = 'Almost done!';
    }
  };

   $scope.$watch('contactObj.httpWeb', function (httpWeb) {
    if (!httpWeb) return;
    valWeb(httpWeb);
  });

   // Validate Message Entry

  let valMsg = (msg) => {
    if (msg.length <=1) {
      $scope.ErrMsg = 'Pleaes take the time to add a few thoughts';
    } else {
      $scope.ErrMsg = 'Yay! You\'re done';
    }
  };

   $scope.$watch('contactObj.msg', function (msg) {
      if (!msg) return;
      valMsg(msg);
    });

  // $scope.$watch(contactObj.firstAndLastName, function ())
  
  
};

ContactsAddController.$inject = ['ContactService', '$state', '$scope'];

export default ContactsAddController;