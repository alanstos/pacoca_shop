import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ArrowLeft, Trash2, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center py-10 w-full px-4 font-sans relative">
      <div className="absolute top-0 w-full h-80 bg-gradient-to-br from-orange-100 to-rose-50 -z-10 rounded-b-[50%] blur-3xl opacity-50"></div>
      
      <div className="w-full max-w-4xl">
        <button
          onClick={() => navigate('/home')}
          className="flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-colors bg-white px-6 py-3 rounded-full shadow-sm mb-6 w-fit font-bold"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar para Loja
        </button>

        <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-xl border border-white/50 animate-slide-up p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-4 shadow-lg shadow-orange-500/20">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-800">Seu Carrinho</h1>
          </div>

          <div className="p-2">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-slate-400">
                <div className="bg-slate-50 w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-4">
                  <ShoppingBag className="w-10 h-10 text-slate-300" />
                </div>
                <p className="text-xl font-medium">Seu carrinho está tão vazio.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-6 bg-slate-50/50 rounded-[28px] border border-slate-100 hover:bg-white transition-colors group">
                    <div className="flex items-center gap-6 w-full sm:w-auto">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-2xl shadow-sm group-hover:scale-105 transition-transform" />
                      <div>
                        <h3 className="font-bold text-slate-800 text-lg">{item.name}</h3>
                        <p className="text-slate-500 font-medium bg-slate-200 w-fit px-3 py-1 rounded-full text-xs mt-2">Quantidade: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 w-full sm:w-auto mt-4 sm:mt-0 justify-between">
                      <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 hover:bg-red-50 p-3 rounded-full transition-colors"
                      >
                        <Trash2 className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-xl font-medium text-slate-600">
                    Total: <span className="text-4xl font-extrabold text-slate-900 ml-2">R$ {cartTotal.toFixed(2)}</span>
                  </div>
                  <button
                    data-cy="checkout-button"
                    onClick={() => navigate('/checkout')}
                    className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-bold py-4 px-12 rounded-full shadow-xl shadow-orange-500/30 transition-all hover:shadow-orange-500/50 hover:-translate-y-1 w-full md:w-auto text-lg"
                  >
                    Prosseguir
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
