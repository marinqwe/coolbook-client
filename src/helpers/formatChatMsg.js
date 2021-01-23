export function formatChatMsg({ username, message, id, room }) {
  return {
    id,
    username,
    message,
    room,
  };
}
