export function BudgetCalculator() {
  const budget = [
    ["Stay", "$45/day"],
    ["Food", "$20/day"],
    ["Transport", "$10/day"],
    ["Activities", "$15/day"],
  ] as const;

  return (
    <section className="card">
      <h2 className="text-xl font-semibold">Budget Split Calculator (MVP)</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {budget.map(([name, amount]) => (
          <li key={name} className="flex justify-between rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-800">
            <span>{name}</span>
            <span className="font-medium">{amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
