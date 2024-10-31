import { supabase } from "../config/dbConfig";

export async function fetchData() {
    const { data, error } = await supabase
        .from('cen_weekly')
        .select('*')
        .limit(1);

    if (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }

    return data;
}

