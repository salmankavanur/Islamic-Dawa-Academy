import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Not Found</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Sorry, the blog post, category, or tag you&apos;re looking for could not be found.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-green-700 hover:bg-green-800">
                <Link href="/blog">Return to Blog</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-700 text-green-700 hover:bg-green-50"
              >
                <Link href="/">Go to Homepage</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}