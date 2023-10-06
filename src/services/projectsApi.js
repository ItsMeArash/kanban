import supabase from "./supabase";
export async function getProjects() {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    console.error(error);
    throw new Error("Projects could not be loaded");
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
