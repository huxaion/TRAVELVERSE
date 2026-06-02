import { posts } from "@/data/posts";
import { EmptyState } from "@/components/ui/empty-state";
import { LikeButton } from "@/components/social/like-button";
import { SaveButton } from "@/components/social/save-button";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find((item) => item.id === id);
  if (!post) return <EmptyState title="Post not found" />;

  return (
    <article className="card space-y-3">
      <h1 className="text-xl font-bold">{post.author} in {post.city}, {post.country}</h1>
      <p>{post.content}</p>
      <div className="flex gap-2">
        <LikeButton initial={post.likes} />
        <SaveButton />
      </div>
    </article>
  );
}
