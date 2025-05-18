"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '../components/Dashboard/Dashboard';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Dashboard />
    </div>
  );
} 