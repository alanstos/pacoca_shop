import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import products from '../data/products.json';
import { ShoppingCart, Flame } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-50 pb-12 font-sans relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-br from-orange-100 to-rose-50 rounded-b-[100px] -z-10 blur-xl opacity-60"></div>

      <header className="sticky top-4 z-50 px-6 max-w-7xl mx-auto w-full transition-all mt-4">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-full flex flex-row items-center justify-between px-8 py-4">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-500">
            Paçoca Shop
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                localStorage.removeItem('isLoggedIn');
                navigate('/login');
              }}
              className="text-slate-500 hover:text-red-500 font-bold transition-colors px-2"
            >
              Sair
            </button>
            <button
              onClick={() => navigate('/cart')}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 shadow-orange-500/30 text-white px-6 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg font-bold relative group"
            >
              <ShoppingCart className="w-5 h-5 transition-transform group-hover:-rotate-12" />
              <span className="hidden sm:inline">Meu Carrinho</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-extrabold w-7 h-7 rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto px-6 mt-12 animate-slide-up">
        <div className="flex items-center gap-2 mb-8">
          <Flame className="text-orange-500 w-8 h-8" />
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Seleção Premium</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-[32px] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden relative">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-2 truncate">{product.name}</h3>
                <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 mb-6 drop-shadow-sm">
                  R$ {product.price.toFixed(2)}
                </p>
                <button
                  data-cy={`add-product-${product.id}`}
                  onClick={() => addToCart(product)}
                  className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-[24px] shadow-md transform transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
