function Message({text, user, time}) {
  return (
    <div>
      <h4>From {user.name} @ {time}</h4>
      <p>{text}</p>
    </div>
  )
}

export default Message;
