import supabase from "./supabase";
export async function getProjects() {
    const { data, error } = await supabase.from("projects").select("*");

    if (error) {
        console.error(error);
        throw new Error("Projects could not be loaded");
    }

    return data;
}
export async function createEditProject(newProject, id) {
    // 1. Create/edit cabin
    let query = supabase.from("projects");

    // A) CREATE
    if (!id) query = query.insert([{ ...newProject }]);

    // B) EDIT
    if (id) query = query.update({ ...newProject }).eq("id", id);

    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("Project could not be created");
    }
    return data;
}

export async function deleteProject(id) {
    const { data, error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("project could not be deleted");
    }

    return data;
}
