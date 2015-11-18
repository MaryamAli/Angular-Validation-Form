let ContactService = function ($http, PARSE) {

  let url = PARSE.URL + 'classes/contact';

  this.getAllContacts = getAllContacts;
  this.addContact = addContact;

  function Contact (contactObj) {
    this.name = contactObj.name;
    this.email = contactObj.email;
    this.website = contactObj.website;
    this.msg = contactObj.msg;

  }

  function getAllContacts () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addContact (contactObj) {
    let c = new Contact(contactObj);
    return $http.post(url, c, PARSE.CONFIG);
  }
};

ContactService.$inject = ['$http', 'PARSE'];

export default ContactService;