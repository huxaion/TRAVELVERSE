export function ErrorState({ message = "Something went wrong." }: { message?: string }) {
  return <div className="card border-red-200 text-sm text-red-600 dark:border-red-900">{message}</div>;
}
