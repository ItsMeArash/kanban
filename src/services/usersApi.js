import supabase from "./supabase";
export async function getUsers() {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    console.error(error);
    throw new Error("users could not be loaded");
  }

  return data;
}
export async function createUser(newUser) {
  const { data, error } = await supabase.from("users").insert([newUser]).select();
  if (error) {
    console.error(error);
    throw new Error("users could not be created");
  }

  console.log(data);
  return data;
}
