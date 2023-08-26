import Database from '@database';
import { IncomingMessage, ServerResponse } from 'http';
const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
    const DB = new Database();
    const allEntries = await DB.getAll();
    const length = allEntries.length;
    response.statusCode = 200;
    response.setHeader('Content-type','application/json' );
    response.end(JSON.stringify({
        length,
        data: allEntries,
    }));
}

export default allAvos;