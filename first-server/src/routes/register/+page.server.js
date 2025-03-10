import { error, json } from '@sveltejs/kit';
import { parse } from 'cookie';

import * as database from '$lib/database.js';

let registered = false;

/** @type {import('./$types').PageServerLoad} */
export function load() {
    return {
        registered
    };
}


/** @type {import('./$types').Action} */
export async function POST({ request }) {
    const formdata = await request.formData();

    const username = formdata.get("username")
    const password = formdata.get("password")

    const client = await database.connect(); // Connect to the mongoDB
    const db = client.db("test"); // select test db
    const collection = db.collection("users");  // select users collection

    // Check if password and username has been sent
    // else throw error with text describing whats wrong


    // Does the username already exist?
   
    if (!await collection.findOne({username})){
        collection.insertOne({ username, password})
    } else {
        return {
            errors: {message:"Username already exists bozo "}
        }
    }
    


    // Is the password too simple?


        // TODO: Dont just create the account. Validate that the user sent proper stuff
        // The user doesnt already exist & passwords are provided.
    collection.insertOne({username,password})

    registered = true
    
  /*   
    return {
        errors: {
            message: "something bing chilling"
        }
    } */
}

/** @type {import('./$types').Action} */
export async function DELETE({ request }) {

    const cookies = parse(request.headers.get('cookie') || '');
    console.log(cookies)


    /*     const client = await database.connect();
        const db = client.db("test"); */

    const body = { "register - delete": "123" }

    // does a cookie exist for the user id?
    // in other words, is the user signed in?

    // delete account connected to the session cookie.


}
