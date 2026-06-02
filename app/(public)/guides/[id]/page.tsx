export default async function GuidePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <section className="card">
      <h1 className="text-2xl font-bold">Guide #{id}</h1>
      <p className="mt-2 text-sm">Community-created travel guide with local phrases, etiquette notes, and hidden gems.</p>
    </section>
  );
}
