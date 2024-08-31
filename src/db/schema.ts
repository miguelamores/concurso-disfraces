import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const votesTable = sqliteTable('votes', {
  id: text('id').primaryKey(),
  voteId: text('vote_id').notNull(),
});
