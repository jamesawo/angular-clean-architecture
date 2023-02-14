import { HandlerEvent } from "@netlify/functions";
import { MongoClient, ObjectId } from 'mongodb'
import { BookmarkRequest } from 'src/app/data/requests/bookmark.request';


const put = async (event: HandlerEvent) => {
    if (!event.body) throw new Error('Please provide a bookmark to save');

    const client = new MongoClient(process.env['MONGODB_URL']);
    const bookmark: BookmarkRequest = JSON.parse(event.body);

    try {
        const { _id, ...restBookmark } = bookmark;
        const database = client.db(process.env['MONGODB_NAME']);
        const result = await database.collection("bookmarks").updateOne(
            { _id: new ObjectId(_id) },
            { $set: restBookmark, },
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
