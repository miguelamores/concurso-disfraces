'use server';

import { db } from './db/drizzle';
import { votesTable } from './db/schema';
import { signIn, signOut } from './auth';
import { eq, count } from 'drizzle-orm';

export const getUserVote = async (email: string) => {
  if (email == null) return null;
  try {
    const result = await db
      .select()
      .from(votesTable)
      .where(eq(votesTable.id, email));
    console.log('result: ', result);
    return result;
  } catch (error) {
    console.error('error user vote: ', error);
    throw error;
  }
};

export const addVote = async (id: string, voteId: string) => {
  try {
    const result = await db
      .insert(votesTable)
      .values({ id, voteId })
      .returning();
    return result;
  } catch (error) {
    throw error;
  }
};

export const getVotes = async () => {
  try {
    return await db
      .select({
        id: votesTable.id,
        voteId: votesTable.voteId,
        voteIdCount: count(votesTable.voteId),
      })
      .from(votesTable)
      .groupBy(votesTable.voteId)
      .all();
  } catch (error) {
    throw error;
  }
};

export const login = async () => {
  try {
    await signIn();
  } catch (error) {
    console.error('error login: ', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut();
  } catch (error) {
    console.error('error logout: ', error);
    throw error;
  }
};

export const insertFakeData = async () => {
  const fakeData = [
    { id: 'miguel@example.com', voteId: 'John Doe' },
    { id: 'juan@example.com', voteId: 'Jane Smith' },
    { id: 'maria@example.com', voteId: 'John Doe' },
    { id: 'pedro@example.com', voteId: 'John Doe' },
    { id: 'luisa@example.com', voteId: 'Jane Smith' },
    { id: 'carlos@example.com', voteId: 'Emily Wilson' },
    { id: 'ana@example.com', voteId: 'Emily Wilson' },
    { id: 'julia@example.com', voteId: 'John Doe' },
  ];

  try {
    await db.insert(votesTable).values(fakeData);
  } catch (error) {
    throw error;
  }
};
