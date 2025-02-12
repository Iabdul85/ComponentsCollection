export default async function Page() {
  let res = await fetch('https://api.vercel.app/blog')
  let posts = await res.json()
console.log(posts)
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title} <p>{post.content}</p></li>
        
      ))}
    </ul>
  )
}