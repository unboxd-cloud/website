import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is Testcontainers? Real Infrastructure for Integration Testing | Unboxd Cloud',
  description:
    'Learn what Testcontainers is, why it matters, and how it helps developers run real databases and services in automated tests using Docker.',
  keywords: [
    'Testcontainers',
    'integration testing',
    'Docker testing',
    'Spring Boot testing',
    'JUnit',
    'PostgreSQL testing',
  ],
  openGraph: {
    title: 'What is Testcontainers? Real Infrastructure for Integration Testing',
    description:
      'Spin up real databases, Kafka, Redis, and more directly inside your tests.',
    type: 'article',
    url: 'https://unboxd.cloud/blogs/testcontainers',
    images: [
      {
        url: '/images/blog/testcontainers-og.svg',
        width: 1200,
        height: 630,
        alt: 'Testcontainers blog cover image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Testcontainers? Real Infrastructure for Integration Testing',
    description:
      'Run real databases and infrastructure dependencies directly in your automated tests.',
    images: ['/images/blog/testcontainers-og.svg'],
  },
  alternates: {
    canonical: 'https://unboxd.cloud/blogs/testcontainers',
  },
};

export default function TestcontainersBlogPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Testing · DevOps · Developer Experience
        </p>

        <h1 className="text-4xl font-black leading-tight md:text-6xl">
          Today We&apos;ll Learn About Testcontainers
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-zinc-300">
          Testcontainers makes integration testing dramatically easier by allowing you to spin up real
          infrastructure dependencies like PostgreSQL, Redis, and Kafka directly from your test code.
        </p>

        <img
          src="/images/blog/testcontainers-og.svg"
          alt="Testcontainers social image"
          className="mt-10 w-full rounded-3xl border border-white/10 bg-white"
        />

        <section className="prose prose-invert prose-zinc mt-14 max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white">
          <h2>What Is Testcontainers?</h2>
          <p>
            Testcontainers is an open-source library that starts disposable Docker containers during your
            automated tests. Instead of mocking a database, you can launch a real PostgreSQL container,
            run your tests against it, and automatically tear it down when the test completes.
          </p>
          <p>
            In simple terms, Testcontainers lets your tests bring their own infrastructure.
          </p>

          <h2>A Situational Example</h2>
          <p>
            Imagine you are building an e-commerce platform. When a customer places an order, your
            application:
          </p>
          <ul>
            <li>Saves order details to PostgreSQL</li>
            <li>Updates inventory in Redis</li>
            <li>Publishes an <code>OrderPlaced</code> event to Kafka</li>
          </ul>
          <p>
            Testing this flow with mocks tells you whether your code calls certain methods, but it does
            not prove that SQL queries work, Redis keys are written correctly, or Kafka events are
            actually published.
          </p>
          <p>
            With Testcontainers, your test starts real PostgreSQL, Redis, and Kafka containers. Your
            application connects to them exactly as it would in production, giving you much stronger
            confidence in the results.
          </p>

          <h2>Simple Example</h2>
          <pre>
{`@Testcontainers
class UserRepositoryTest {

  @Container
  static PostgreSQLContainer<?> postgres =
      new PostgreSQLContainer<>("postgres:16");

  @Test
  void shouldSaveUser() {
    // Run tests against a real PostgreSQL database
  }
}`}
          </pre>

          <h2>Why Developers Love Testcontainers</h2>
          <ul>
            <li>Uses real services instead of mocks</li>
            <li>Creates isolated environments for every test run</li>
            <li>Works consistently on laptops and CI pipelines</li>
            <li>Eliminates shared test environment maintenance</li>
            <li>Catches integration issues earlier</li>
          </ul>

          <h2>When to Use Testcontainers</h2>
          <p>
            Testcontainers is ideal for integration tests involving databases, message brokers, caches,
            and cloud service emulators.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            If your application depends on infrastructure, Testcontainers is one of the best tools you
            can add to your testing toolkit. It gives you production-like confidence while keeping tests
            fully automated and reproducible.
          </p>
        </section>
      </article>
    </main>
  );
}
