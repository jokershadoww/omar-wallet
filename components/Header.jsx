import { Wallet } from 'lucide-react';

export default function Header({ onSignOut }) {
  return (
    <header className="container flex items-center justify-between mt-6">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white"><Wallet/></div>
        <div>
          <h2 className="text-lg font-bold">Omar Wallet</h2>
          <p className="text-sm text-gray-600">Personal wallet dashboard</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-700">Omar A.</div>
        <button className="btn-ghost" onClick={onSignOut}>Sign out</button>
      </div>
    </header>
  );
}
