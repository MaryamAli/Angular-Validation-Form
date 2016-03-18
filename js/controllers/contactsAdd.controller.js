let ContactsAddController = function(ContactService, $state, $scope) {
  
  let vm =this;

  vm.title = 'Add as many facts as you\'d like:';

  vm.addContact = addContact;

  function addContact (contactObj) {
    ContactService.addContact(contactObj).then( (res) => {
      console.log(res);
      $state.go('root.about');
    });
    }

  // Validate Name Entry
  let valName = (firstAndLastName) => {
    if (firstAndLastName.length <= 1) {
      $scope.ErrMsg= 'Please enter your first AND last name';
    } else {
      $scope.ErrMsg = 'Thanks';
    }
  };

  $scope.$watch('contactObj.firstAndLastName', function (newVal, prevVal) {
    if (!newVal) return;
    valName(newVal);
  });

  // Validate Email Entry

  let valEmail = (email) => {
    let emailCorrect = email.indexOf('@');
    if (emailCorrect <=0) {
      $scope.ErrMsg = 'Please enter a valid email address';
    } else {
      $scope.ErrMsg ='Half-way there';
    }
  };

  $scope.$watch('contact.email', function (email) {
    if (!email) return;
    valEmail(email);
  });

  // Validate Website Entry

  let valWeb = (httpWeb) => {
    let okFirst = httpWeb.indexOf('http://');
    let okTwo = httpWeb.indexOf('https://');
    if ((okFirst < 0) && (okTwo <0)) {
      $scope.ErrMsg = 'Please include a site beginning with http:// or https://';
    } else {
      $scope.ErrMsg = 'Almost done!';
    }
  };

   $scope.$watch('contact.httpWeb', function (httpWeb) {
    if (!httpWeb) return;
    valWeb(httpWeb);
  });

   // Validate Message Entry

  let valMsg = (msg) => {
    if (msg.length <=1) {
      $scope.ErrMsg = 'Please take the time to add a few thoughts';
    } else {
      $scope.ErrMsg = 'Yay! You\'re done';
    }
  };

   $scope.$watch('contact.msg', function (msg) {
      if (!msg) return;
      valMsg(msg);
    });

  // $scope.$watch(contactObj.firstAndLastName, function ())
  
  
};

ContactsAddController.$inject = ['ContactService', '$state', '$scope'];

export default ContactsAddController;