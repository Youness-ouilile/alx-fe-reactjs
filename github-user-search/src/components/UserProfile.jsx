function UserProfile({ user }) {
    if (!user) return null;
  
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <img src={user.avatar_url} alt={user.name} width="100" />
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>
    );
  }
  
  export default UserProfile;
  