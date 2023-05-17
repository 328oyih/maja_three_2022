import { invalid, redirect } from '@sveltejs/kit';
import { ObjectID } from 'bson';
import * as database from "$lib/database.js";
import type { Actions } from './$types';


export const actions: Actions = {
	logout: async ({ request, locals, cookies }) => {
		const form = await request.formData();

		// TODO: Implement register
		// Check if ustername already exist etc.
		cookies.delete('userid')
		throw redirect(302, '/login')

	},
	deleteaccount: async ({ request, locals, cookies }) => {
		const form = await request.formData();
		const client = await database.connect();
		
		const db = client.db("test");
		const collection = db.collection("users");
		const userTarget = cookies.get("userid");
		var o_id = new ObjectID(userTarget);
		let result = await collection.findOne({"_id" : o_id})

		if(result){
			collection.deleteOne(result);
			cookies.delete('userid')
			throw redirect(302, '/register')
		}
		else {
			return invalid(400, {message: "haha bozo try again"})
		}

	

		// TODO: Implement delete account
		// Check if ustername already exist etc.
		

	},
};
