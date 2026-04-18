import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PawPrint } from 'lucide-react';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '123') {
      localStorage.setItem('isLoggedIn', 'true');
      setError(false);
      navigate('/home');
    } else {
      setError(true);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900 px-4 font-sans">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 p-10 mt-10 rounded-[32px] shadow-2xl z-10 animate-slide-up">
        <div className="flex flex-col items-center mb-10">
          <div className="bg-gradient-to-tr from-orange-500 to-rose-400 p-5 rounded-3xl shadow-lg mb-6 transform transition hover:scale-110 hover:rotate-6 duration-300">
            <PawPrint className="text-white w-12 h-12" />
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Paçoca Shop</h1>
          <p className="text-slate-300 mt-2 font-medium">O refúgio premium dos pets</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-300 ml-2">
              Senha de Acesso
            </label>
            <input
              type="password"
              data-cy="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-[24px] focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder-slate-400 font-medium"
              placeholder="Digite a sua senha..."
            />
            {error && (
              <p
                data-cy="error-message"
                className="ml-2 mt-2 text-sm font-bold animate-fade-in"
                style={{ color: 'rgb(255, 0, 0)' }}
              >
                Login ou senha inválidos
              </p>
            )}
          </div>

          <button
            type="submit"
            data-cy="login-button"
            className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-bold py-4 px-4 rounded-[24px] shadow-lg shadow-orange-500/30 transform transition-all hover:-translate-y-1 hover:shadow-orange-500/50 flex items-center justify-center text-lg"
          >
            Entrar no Shop
          </button>
        </form>
      </div>
    </div>
  );
}
