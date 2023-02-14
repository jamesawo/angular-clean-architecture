import { HandlerEvent } from "@netlify/functions";
import { MongoClient, ObjectId } from 'mongodb'
import { Project } from './../../../src/app/lib/types.interface';

const put = async (event: HandlerEvent) => {
	if (!event.body) throw new Error('Please provide a project to update');

	const client = new MongoClient(process.env['MONGODB_URL']);
	const project: Project = JSON.parse(event.body);

	try {
		const { _id, ...restProject } = project;
		const database = client.db(process.env['MONGODB_NAME']);
		const result = await database.collection("projects").updateOne(
			{ _id: new ObjectId(_id) },
			{ $set: restProject, },
			{ upsert: false }
		);

		return result;

	} catch (error) {
		console.log(error);
		throw new Error(error.message);
	}
	finally {
		await client.close();
	}
}

export { put };
