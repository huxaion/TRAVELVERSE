import { FollowButton } from "@/components/social/follow-button";

export default async function PublicProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  return (
    <section className="card space-y-3">
      <h1 className="text-2xl font-bold">@{username}</h1>
      <p className="text-sm">Travel creator profile mode placeholder.</p>
      <FollowButton />
    </section>
  );
}
