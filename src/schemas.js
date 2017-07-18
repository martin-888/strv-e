import { schema } from 'normalizr';

export const userSchema = new schema.Entity('users');

export const eventSchema = new schema.Entity('events', {
  owner: userSchema,
  attendees: [userSchema],
});
