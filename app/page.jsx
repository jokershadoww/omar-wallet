'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const USER = 'omar2006Ah';
const PASS = '123456omarAh';

export default function Login() {
  const [u, setU] = useState('');
  const [p, setP] = useState('');
  const [err, setErr] = useState('');
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    if (u === USER && p === PASS) {
      localStorage.setItem('omar_wallet_auth', 'true');
      router.push('/dashboard');
    } else {
      setErr('Invalid username or password');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="card">
          <h1 className="text-3xl font-extrabold mb-2">Welcome to Omar Wallet</h1>
          <p className="text-gray-600 mb-6">Sign in to access your personal wallet dashboard.</p>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Username</label>
              <input value={u} onChange={(e)=>setU(e.target.value)} className="w-full p-3 rounded-xl border border-gray-200" placeholder="Enter username" required />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Password</label>
              <input type="password" value={p} onChange={(e)=>setP(e.target.value)} className="w-full p-3 rounded-xl border border-gray-200" placeholder="Enter password" required />
            </div>
            {err && <div className="text-red-600 text-sm">{err}</div>}
            <button className="btn-primary w-full mt-2">Sign in</button>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <img src="/wallet-hero.jpg" alt="wallet hero" className="rounded-2xl shadow-xl" />
        </div>
      </div>
    </main>
  );
}
