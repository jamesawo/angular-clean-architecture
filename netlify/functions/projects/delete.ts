import { MongoClient, ObjectId } from 'mongodb'

const remove = async (projectId: string) => {
	if (!projectId) throw new Error('Please provide a project to remove');
	const client = new MongoClient(process.env['MONGODB_URL']);

	try {
		const database = client.db(process.env['MONGODB_NAME']);
		const result = await database.collection("projects")
			.deleteOne({ "_id": new ObjectId(projectId) });
		return result;

	} catch (error) {

		console.log(error);
		throw new Error(error.message);
	}
	finally {
		await client.close();
	}
}


export { remove };
