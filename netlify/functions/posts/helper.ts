import { MongoClient, ObjectId } from 'mongodb'
import { HandlerEvent } from "@netlify/functions";


// checks query string param then decides which get method to call
const get = async (event: HandlerEvent) => {
    if (Object.keys(event.queryStringParameters).length > 0) {
        return await getOne(event);
    }
    return await getAll(event);
}

// get all post record
const getAll = async (event: HandlerEvent) => {
    const client = new MongoClient(process.env['MONGODB_URL']);
    try {
        await client.connect();
        const db = client.db(process.env['MONGODB_NAME']);
        return await db.collection('posts').find({}).sort({ created_at: 1 }).toArray();
    } catch (err) {
        console.log(err);
        throw new Error(`${err.message}`);
    } finally {
        await client.close();
    }
}

// get one post record
const getOne = async (event: HandlerEvent) => {
    const id = event.queryStringParameters.id;

    const client = new MongoClient(process.env['MONGODB_URL']);
    try {
        await client.connect();
        const db = client.db(process.env['MONGODB_NAME']);
        return await db.collection('posts').findOne({ "_id": new ObjectId(id) });
    } catch (err) {
        console.log(err);
        throw new Error(`${err.message}`);
    } finally {
        await client.close();
    }
}

// create new post record
const post = async (event: HandlerEvent) => {
    if (!event.body) throw new Error('Please provide a book to save');

    const client = new MongoClient(process.env['MONGODB_URL']);
    const body = JSON.parse(event.body);
    try {
        const database = client.db(process.env['MONGODB_NAME']);
        return await database.collection("posts").insertOne(
            {
                ...body,
                created_at: new Date()
            },
        );
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
    finally {
        await client.close();
    }
}

// update a post record
const put = async (event: HandlerEvent) => {
    if (!event.body) throw new Error('Please provide a book to save');

    const client = new MongoClient(process.env['MONGODB_URL']);
    const post: Post = JSON.parse(event.body);
    const { _id, ...restPost } = post;

    try {
        const database = client.db(process.env['MONGODB_NAME']);
        const result = await database.collection("posts").updateOne(
            { _id: new ObjectId(_id) },
            { $set: restPost, },
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

// Delete Method
const remove = async (postId: string) => {
    if (!postId) throw new Error('Please provide a post to remove');

    const client = new MongoClient(process.env['MONGODB_URL']);
    try {
        const database = client.db(process.env['MONGODB_NAME']);
        const result = await database.collection("posts")
            .deleteOne({ "_id": new ObjectId(postId) });
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
    finally {
        await client.close();
    }
}


export { remove, get, post, put };
