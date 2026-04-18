import { useNavigate } from 'react-router-dom';
import { PartyPopper } from 'lucide-react';

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans overflow-hidden">
      <div className="relative bg-white p-12 rounded-[40px] shadow-2xl border border-slate-100 w-full max-w-lg text-center animate-slide-up">
        {/* Decorative Confetti Background (Simulated via colors) */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-rose-400 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-12 w-6 h-6 bg-orange-400 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>

        <div className="flex justify-center mb-8 relative">
          <div className="absolute inset-0 bg-emerald-400 blur-2xl opacity-40 rounded-full"></div>
          <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-6 rounded-full shadow-xl relative z-10 animate-bounce" style={{ animationIterationCount: 3 }}>
            <PartyPopper className="w-20 h-20 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-600 mb-4 tracking-tight">
          Sucesso absoluto!
        </h1>
        <p className="text-slate-500 text-lg mb-10 font-medium px-4">
          Seu pedido no Paçoca Shop foi pago.<br/> Seus pets vão amar! 🐱🐶
        </p>
        
        <button
          onClick={() => navigate('/home')}
          className="w-full bg-slate-900 hover:bg-black text-white font-bold py-5 rounded-[24px] shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1 text-lg"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
}
