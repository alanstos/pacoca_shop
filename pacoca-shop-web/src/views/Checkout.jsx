import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { CreditCard, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function Checkout() {
  const navigate = useNavigate();
  const { cartTotal, clearCart } = useCart();
  const [cardNumber, setCardNumber] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    if (cardNumber.trim()) {
      clearCart();
      navigate('/success');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] top-0 left-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-[120px] bottom-0 right-0"></div>
      
      <div className="w-full max-w-lg relative z-10 animate-slide-up">
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 font-bold bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 w-fit"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar
        </button>

        <div className="bg-slate-900/80 backdrop-blur-2xl rounded-[40px] shadow-2xl border border-white/10 overflow-hidden">
          <div className="px-10 pt-10 pb-6 flex items-center gap-4 border-b border-white/5">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-2xl shadow-lg">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white">Pagamento</h1>
              <p className="text-slate-400 font-medium">Checkout 100% seguro</p>
            </div>
          </div>

          <div className="p-10">
            <div className="mb-8 p-6 bg-white/5 rounded-[24px] border border-white/10 flex justify-between items-center shadow-inner">
              <span className="font-medium text-slate-300">Total da compra</span>
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
                R$ {cartTotal.toFixed(2)}
              </span>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-300 ml-2">
                  Número do Cartão
                </label>
                <input
                  type="text"
                  data-cy="credit-card-input"
                  required
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="0000 0000 0000 0000"
                  className="w-full px-6 py-4 bg-black/40 border border-white/10 text-white rounded-[20px] focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-mono tracking-widest text-lg"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-300 ml-2">Validade</label>
                  <input type="text" placeholder="MM/AA" className="w-full px-6 py-4 bg-black/40 border border-white/10 text-white rounded-[20px] focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-center" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-300 ml-2">CVC</label>
                  <input type="text" placeholder="***" className="w-full px-6 py-4 bg-black/40 border border-white/10 text-white rounded-[20px] focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-mono text-center" />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-center gap-2 text-emerald-400 font-medium mb-6">
                <ShieldCheck className="w-5 h-5"/> Dados criptografados
              </div>

              <button
                type="submit"
                data-cy="pay-button"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold py-5 rounded-[24px] shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:shadow-emerald-500/40 text-lg flex items-center justify-center gap-2"
              >
                Confirmar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
