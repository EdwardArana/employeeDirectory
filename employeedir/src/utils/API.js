import axios from "axios";

export default {

  getUsers: ()=> axios.get("https://randomuser.me/api/?results=200&nat=us")

};
