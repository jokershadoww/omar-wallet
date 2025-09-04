'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { ArrowUpRight, ArrowDownLeft, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const router = useRouter();
  const [balance, setBalance] = useState(59450);
  const [toast, setToast] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  useEffect(()=>{
    const authed = typeof window !== 'undefined' && localStorage.getItem('omar_wallet_auth') === 'true';
    if (!authed) router.push('/');
  },[router]);

  const formatCurrency = (v) => new Intl.NumberFormat('en-EG', { style:'currency', currency:'EGP', maximumFractionDigits:0 }).format(v);

  const handleAction = () => {
    setShowModal(true);
    setCode('');
    setError('');
  };

  const verifyCode = () => {
    if (code === '556794') {
      setShowModal(false);
      setToast('Verified successfully ✅');
      setTimeout(()=>setToast(''), 2000);
    } else {
      setError('Invalid code ❌');
    }
  };

  return (
    <main className="min-h-screen p-6">
      <Header onSignOut={() => { localStorage.removeItem('omar_wallet_auth'); router.push('/'); }} />

      <section className="container grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.05}} className="md:col-span-2 card">
          <p className="text-sm text-gray-600">Current Balance</p>
          <h1 className="text-4xl font-extrabold mt-2">{formatCurrency(balance)}</h1>
          <p className="text-xs text-gray-500 mt-1">Egyptian Pound</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="btn-primary flex items-center gap-2" onClick={handleAction}> <ArrowUpRight/> Transfer</button>
            <button className="btn-ghost flex items-center gap-2" onClick={handleAction}> <ArrowDownLeft/> Receive</button>
            <button className="btn-ghost flex items-center gap-2" onClick={handleAction}> <CreditCard/> Withdraw</button>
          </div>
        </motion.div>

        <motion.aside initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.12}} className="card">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-between"><span>Top up mobile</span><button className="btn-ghost" onClick={handleAction}>Pay</button></li>
            <li className="flex items-center justify-between"><span>Electricity bill</span><button className="btn-ghost" onClick={handleAction}>Pay</button></li>
            <li className="flex items-center justify-between"><span>Internet</span><button className="btn-ghost" onClick={handleAction}>Pay</button></li>
          </ul>
        </motion.aside>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="card max-w-md w-full">
            <h2 className="text-lg font-bold mb-2">Verification required</h2>
            <p className="text-sm text-gray-600 mb-4">A verification code has been sent to <strong>01144969848</strong>. Please enter the 6-digit code.</p>
            <input type="text" value={code} onChange={(e)=>setCode(e.target.value)} maxLength={6} className="w-full p-3 rounded-xl border border-gray-200 mb-2" placeholder="Enter 6-digit code" />
            {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
            <div className="flex justify-end gap-3 mt-2">
              <button className="btn-ghost" onClick={()=>setShowModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={verifyCode}>Verify</button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="fixed bottom-6 left-1/2 -translate-x-1/2 card p-3">{toast}</div>}
    </main>
  );
}
