import { newSessionURL } from "@/helpers/messagingAPI"

export default function LoginWith({strategy, name}) {
  return (
    <form action={newSessionURL(strategy)} method="post">
      <button data-turbo="false" type="submit">{name}</button>
      <input type="hidden" name="authenticity_token" value={document.querySelector("meta[name='csrf-token']").getAttribute("content")}/>
    </form>
  );
}
