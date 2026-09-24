
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <header className="bg-orange-600 p-6 text-white">
        <h1 className="text-4xl font-bold">CHAJEats</h1>
        <p>Delicious food. Lower delivery fees.</p>
      </header>

      <section className="mx-auto max-w-4xl p-6">
        <h2 className="mb-4 text-3xl font-bold">
          Hungry? We've got you covered.
        </h2>

        <p className="mb-8 text-gray-600">
          Discover great food from local restaurants
          and have it delivered to your door.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/signup"
            className="rounded-lg bg-orange-600 px-6 py-3 text-white"
          >
            Create Account
          </Link>

          <Link
            href="/login"
            className="rounded-lg border border-orange-600 px-6 py-3 text-orange-600"
          >
            Log In
          </Link>
        </div>
      </section>
    </main>
  );
}
