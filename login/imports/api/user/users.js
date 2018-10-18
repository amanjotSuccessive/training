import { Meteor } from 'meteor/meteor';
import Schema from '../../../modals/userSchema/userSchema';

const Users = Meteor.users;
Users.attachSchema(Schema);
export default Users;
