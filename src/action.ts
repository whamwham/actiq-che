"use server";

import { Users } from '@/db/schema'
import { db } from './db';
import { eq } from 'drizzle-orm';

type IUser = {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
}

export async function createUsers(data: IUser) {
    try {
        const users = await db.query.Users.findMany({
            where: eq(Users.id, data.id)
        });
        if(users) return true;
        await db.insert(Users).values({
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            username: data.username,
        });
    } catch (err) {
        console.error('Ошибка записи', err);
    }
}