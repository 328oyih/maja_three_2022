import type { Actions } from './$types';
import * as database from "$lib/database.js"
import { invalid, redirect } from '@sveltejs/kit';
import * as crypto from "crypto"

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const form = await request.formData();

		// TODO: Implement register
		// Check if ustername already exist etc.
		const username = form.get("username");
		const password = form.get("password")?.toString();

		const client = await database.connect();
		const db = client.db("test");
		const collection = db.collection("users");





		if (username && password && password.toString().length > 5) {

			if (!await collection.findOne({ "username": username })) {

				// Creating a unique salt for a particular user
				let salt = crypto.randomBytes(16).toString('hex');

				// Hash the salt and password with 1000 iterations, 64 length and sha512 digest 
				const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

				collection.insertOne({ username, salt, hash })
				throw redirect(302, "/login")
			}
			else if (await collection.findOne({ "username": username })) {
				return invalid(400, { message: "user already taken" })
			}



		}

		if (password && password.toString().length < 5) {
			return invalid(400, { message: "password is shit" })
		}



	},
};
