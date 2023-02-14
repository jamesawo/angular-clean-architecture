import { HandlerEvent } from "@netlify/functions";
import { MongoClient } from 'mongodb'

const get = async (event: HandlerEvent) => {
	if (Object.keys(event.queryStringParameters).length > 0) {
		return await getOne(event);
	}
	return await getAll(event);
}

const getAll = async (event: HandlerEvent) => {
	const client = new MongoClient(process.env['MONGODB_URL']);
	try {
		await client.connect();
		const db = client.db(process.env['MONGODB_NAME']);
		return await db.collection('bookmarks').find({}).sort({ created_at: -1 }).toArray();
	} catch (err) {
		throw new Error(`${err.message}`);
	} finally {
		await client.close();
	}
}

const getOne = async (event: HandlerEvent) => {
	const id = event.queryStringParameters.id;
	return;
}

export { get };
