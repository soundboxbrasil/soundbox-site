'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu({ links }) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {(links || []).map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              text-sm font-medium uppercase tracking-wider
              transition-colors duration-300
              pb-1
              ${isActive
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600 border-b-2 border-transparent'
              }
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
