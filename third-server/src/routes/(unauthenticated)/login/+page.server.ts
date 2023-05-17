import { invalid, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import * as database from '$lib/database'

export const actions: Actions = {
	login: async ({ request, locals, cookies }) => {
		const form = await request.formData();

		// TODO: Implement login
		// Check if password and username
		// exists and is correct
		const client = await database.connect()
		const db = client.db("test")
		const collection = db.collection("users")

		const USER = await collection.findOne({username: form.get("username")})
		console.log(USER)

		if (form.get('username') == "william") {
			return invalid(400, {incorrect:true})
		}
		if(true) {
			cookies.set('userid', 'secret', {
				path: '/',
				httpOnly: true, // optional for now
				sameSite: 'strict',// optional for now
				secure: process.env.NODE_ENV === 'production',// optional for now
				maxAge: 120 //
			})
		}

		throw redirect(302, '/')

	},
};
