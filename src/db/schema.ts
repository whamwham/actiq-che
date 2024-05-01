import { foreignKey, integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable('Users', {
    id: integer('id').primaryKey(),
    first_name: varchar('first_name'),
    last_name: varchar('last_name'),
    username: varchar('usernames'),
    // добавить время создания
    // добавить время обновления
});

// export const Wallets = pgTable('Wallets', {
//     id: serial('id').primaryKey(),
//     userId: integer('user_id'),
//     balance: integer('balance').default(0),
//     createdAt: timestamp('created_at').defaultNow(),
// });