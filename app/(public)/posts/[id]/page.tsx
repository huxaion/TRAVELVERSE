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
      <header className="space-y-1">
        <h1 className="text-xl font-bold">{post.author}</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300" aria-label={`Location: ${post.city}, ${post.country}`}>
          {post.city}, {post.country}
        </p>
      </header>
      <p>{post.content}</p>
      <div className="flex gap-2">
        <LikeButton initial={post.likes} />
        <SaveButton />
      </div>
    </article>
  );
}
