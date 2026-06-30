const apiRoot = "/api/v1"

function newSessionURL(strategy) {
  return `/users/auth/${strategy}/`
}

function sendMessageToChat({text, chat_id}) {
  return handleResponse(
    fetch(`${apiRoot}/messages/create`, createPOST({text, chat_id}))
  );
}

function sendMessageToUsers({text, user_ids}) {
  return handleResponse(
    fetch(`${apiRoot}/messages/create`, createPOST({text, user_ids}))
  );
}

function getChatsList() {
  return handleResponse(
    fetch(`${apiRoot}/chats/index`)
  );
}

function getChat(chat_id) {
  return handleResponse(
    fetch(`${apiRoot}/chat/${chat_id}`)
  );
}

function createChat({name, user_ids}) {
  return handleResponse(
    fetch(`${apiRoot}/chats/create`, createPOST({name, user_ids}))
  );
}

function getCurrentUser() {
  return handleResponse(
    fetch(`${apiRoot}/user/current`)
  )
}

async function updateUser({name}) {
  return handleResponse(
    fetch(`${apiRoot}/user/current/update`, createPOST({name}))
  );
}

function handleResponse(promise, returnOnError) {
  return promise.then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response not ok");
  })
  .catch(error => {
    console.log(error.message);
    return null;
  });
}

function createPOST(object) {
  const csrf = document.querySelector('meta[name="csrf-token"]').content;

  return {
    method: "POST",
    headers: {
      "X-CSRF-Token": csrf,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  }
}

export {
  newSessionURL,
  sendMessageToChat,
  sendMessageToUsers,
  getChatsList,
  getChat,
  createChat,
  getCurrentUser,
  updateUser,
}
