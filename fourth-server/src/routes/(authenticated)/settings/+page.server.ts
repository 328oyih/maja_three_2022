import { fail, redirect } from '@sveltejs/kit';
import { ObjectID } from 'bson';
import * as database from "$lib/database.js";
import type { Actions } from './$types';


export const actions: Actions = {
	logout: async ({ request, locals, cookies }) => {
		// TODO: Implement register
		// Check if ustername already exist etc.
		console.log("yo")
		cookies.delete('session')
		throw redirect(302, '/login')

	},
	deleteaccount: async ({ request, locals, cookies }) => {

		// TODO: Implement delete account
		// Check if ustername already exist etc.
		

	},
};
