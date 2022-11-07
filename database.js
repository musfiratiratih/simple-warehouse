import { createConnection } from "mysql2";

export const db = createConnection({
	host: '127.0.0.1',
	port: 3306,
	user: 'halimtuhu',
	password: 'halimtuhu',
	database: 'simple_warehouse'
})
