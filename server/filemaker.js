import { Client } from 'fm-data-api-client';
import dotenv from 'dotenv';

dotenv.config();


export async function createPayload(json) {
    const client = new Client(
        process.env.FM_SERVER,
        process.env.FM_DATABASE,
        process.env.FM_USERNAME,
        process.env.FM_PASSWORD
    );
    const layout = client.layout('Test');
    const createResult = await layout.create({
        json: json
    });

    return createResult;
}
