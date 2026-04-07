import Link from 'next/link';
import { getProductSlugs } from '@/lib/products';
import { IconArrowRight } from '@tabler/icons-react';

export default function Home() {
  const productSlugs = getProductSlugs();

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Explore Nossos Produtos
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Qualidade e inovação em áudio profissional para todas as suas necessidades.
        </p>
      </div>

      <div className="max-w-6xl mx-auto pb-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productSlugs.map((slug) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="group flex flex-col bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              {/* ÁREA DA FOTO DO PRODUTO */}
              <div className="w-full h-56 mb-6 relative bg-white rounded-md overflow-hidden flex items-center justify-center border border-gray-100">
                <img
                  src={`/products/${slug}/banner.webp`}
                  alt={slug}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h2 className="text-xl font-bold text-gray-800 capitalize group-hover:text-blue-600 transition-colors">
                {slug.replace(/-/g, ' ')}
              </h2>
              <div className="flex items-center justify-between mt-auto pt-4">
                <span className="text-blue-500 font-semibold">Ver detalhes</span>
                <IconArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
