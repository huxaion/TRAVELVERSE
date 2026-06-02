import { posts } from "@/data/posts";

export default async function CommunityByCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const filtered = posts.filter((post) => post.country.toLowerCase() === country.toLowerCase());

  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-bold capitalize">{country} Community</h1>
      {filtered.length ? filtered.map((post) => (
        <article key={post.id} className="card">
          <h2 className="font-semibold">{post.author} • {post.city}</h2>
          <p className="mt-1 text-sm">{post.content}</p>
        </article>
      )) : <p className="card text-sm">No posts yet for this country.</p>}
    </section>
  );
}
