'use server';

import { db } from './db/drizzle';
import { votesTable } from './db/schema';
import { signIn, signOut } from './auth';
import { eq } from 'drizzle-orm';

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
    throw Error(error.message);
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
