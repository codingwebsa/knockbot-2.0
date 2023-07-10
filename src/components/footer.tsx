import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center px-4 mt-16 text-gray-800">
      <div className="container px-6 py-6">
        <hr className="h-px bg-gray-200 border-none my-7" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <a href="#">
            <Image
              className="w-auto h-7"
              src="/images/logo.png"
              width={30}
              height={30}
              alt=""
            />
          </a>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <Link
                href="/"
                className="px-4 text-base text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="px-4 text-base text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
              >
                Blog
              </Link>
              <Link
                href="/showcase"
                className="px-4 text-base text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
              >
                Showcase
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
