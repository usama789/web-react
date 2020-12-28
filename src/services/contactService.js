import GenericService from "./GenericService";
class ContactService extends GenericService {
  constructor() {
    super();
  }
  addContact = (data) => this.post("contact/", data);
  getContacts = () => this.get("contact/");
  deleteContact = (_id) => this.delete("contact/" + _id);

}

let contactService = new ContactService();
export default contactService;
