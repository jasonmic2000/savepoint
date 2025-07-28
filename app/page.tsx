import { createClient } from "@/utils/supabase/server";
import { Fragment } from "react";

export default async function Page() {
  const supabase = await createClient();

  const { data: todos } = (await supabase.from("todos").select());
  console.log("Todos: ", todos);

  return (
    <Fragment>
      Hello there
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </Fragment>
  );
}
