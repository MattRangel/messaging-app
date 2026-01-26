export function createSession(e) {
  e.preventDefault();
  return handleResponse(
    fetch(`/auth/developer/`, createPOST({email: "example@a.com"}))
  );
}

function handleResponse(promise) {
  return promise.then(response => {
    if (response.ok) {
      return response.body;
    }
    throw new Error("Network response not ok");
  })
  .catch(error => console.log(error.message));
}

function createPOST(object) {
  return {
    method: "POST",
    headers: {
      "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  }
}
