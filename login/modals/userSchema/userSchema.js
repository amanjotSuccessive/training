import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';

const Schema = new SimpleSchema({
  _id: {
    type: String,
  },
  city: {
    type: String,
    max: 50,
    optional: true,
  },
  address: {
    type: String,
    max: 100,
    optional: true,
  },
  age: {
    type: Number,
    optional: true,
    defaultValue: 18,
  },
  username: {
    type: String,
    optional: false,
  },
  services: {
    type: Object,
    blackbox: true,
  },
});

export default Schema;
