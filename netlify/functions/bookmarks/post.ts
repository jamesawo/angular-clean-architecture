import { HandlerEvent } from "@netlify/functions";
import { MongoClient, ObjectId } from 'mongodb'

const post = async (event: HandlerEvent) => {
	if (!event.body) throw new Error('Please provide a book to save');

	const client = new MongoClient(process.env['MONGODB_URL']);

	try {
		const database = client.db(process.env['MONGODB_NAME']);
		const body = JSON.parse(event.body);
		return await database.collection("bookmarks").insertOne(
			{
				...body,
				created_at: new Date()
			}
		);

	} catch (error) {
		console.log(error);
		throw new Error(error.message);
	}
	finally {
		await client.close();
	}
}

export { post };
