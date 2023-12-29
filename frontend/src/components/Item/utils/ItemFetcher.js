import agent from "../../../agent";

export async function getItemAndComments(id) {
  const item = agent.Items.get(id);
  const comments = agent.Comments.forItem(id);

  const [it, cm] = await Promise.all([item, comments]);
  return [it, cm];

}
