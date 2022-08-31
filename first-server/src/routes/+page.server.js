import * as state from '$lib/state';


// i load säger vi vad som ska hämtas från servern och tillhandahållas
// som data till hemsidan i samma route


/** @type {import('./$types').PageServerLoad} */
export function load() {
    return {
        number: state.number,
    };
}

// en post funktion körs t.ex. när vi submittar en form med en post. Eller om vi kör ett fetch anrop
// met metodon POST

/** @type {import('./$types').Action} */
export async function POST() {


    state.increase()

    // Vi kan skicka med errors ifall nått gått fel. te.x. skrivit in fel lösenord.
    // Då tilldelas den json vi skickar tillbaka till variabeln errors som finss längst upp i script
    // taggen på hemsidan.

    return {
        status: 200,
        errors: {
            test: "asd",
            kalle: "tjena"
        }
    }

}