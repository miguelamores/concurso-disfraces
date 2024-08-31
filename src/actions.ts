'use server';

import { db } from './db/drizzle';
import { votesTable } from './db/schema';

export const getData = async () => {
  const result = await db.select().from(votesTable).all();
  console.log('result: ', result);
  return result;
};

export const addVote = async (id: string, voteId: string) => {
  try {
    return await db.insert(votesTable).values({ id, voteId });
  } catch (error) {
    console.log(error);
  }
};
