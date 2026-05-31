function UserCard({ name, email, avatar }) {
  return (
    <div className="user-card">
      <div className="avatar">{avatar}</div>
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default UserCard;
