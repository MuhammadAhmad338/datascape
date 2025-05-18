import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/login");
    }
  }, [router]);

  if (isAuthenticated === null) return null; // or a loading spinner

  if (!isAuthenticated) return null;

  return <>{children}</>;
}