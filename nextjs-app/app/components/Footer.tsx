import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container py-12">
        <div className="text-center">
          <p className="text-sm text-gray-600">
            If you have suggestions or want to contact me:
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link
              href="https://github.com/adriankarp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <FaGithub className="h-5 w-5" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/adrian-karp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <FaLinkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="mailto:karp.adrian@protonmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <MdEmail className="h-5 w-5" />
              <span>Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
