import postgres from 'postgres'
import { NEXT_PUBLIC_DB } from './constants'

const sql = postgres(NEXT_PUBLIC_DB ?? '', {
    host: 'aws-0-ap-northeast-2.pooler.supabase.com',            // Postgres ip address[s] or domain name[s]
    port: 5432,          // Postgres server port[s]
    database: 'postgres',            // Name of database to connect to
    username: 'postgres.mrhpbteqzpwrmvlorobs',            // Username of database user
    password: '!Eoghdkfma224',            // Password of database user
}) // will use psql environment variables

export default sql