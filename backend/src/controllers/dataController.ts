import { supabase } from "../config/dbConfig";

export async function fetchData() {
    const { data, error } = await supabase
        .from('cen_weekly')
        .select('*'); // Remove the limit to fetch all articles

    if (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }

    return data;
}
