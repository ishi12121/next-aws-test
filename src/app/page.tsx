export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Next.js API Testing App</h1>
      <p>Welcome to the Next.js testing environment!</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Available API Endpoints:</h2>
        <ul>
          <li>
            <a href="/api/test">/api/test</a> - Simple test endpoint
          </li>
          <li>
            <a href="/api/users">/api/users</a> - Get all users (GET) or create user (POST)
          </li>
          <li>
            <a href="/api/posts">/api/posts</a> - Get all posts (GET) or create post (POST)
          </li>
        </ul>
      </div>
    </main>
  )
}
