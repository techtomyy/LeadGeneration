import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/login/LoginHeader';
import { loginUser } from '../service/authService';
import LoginForm from '../components/login/LoginForm';
import LoginDivider from '../components/login/LoginDivider';
import GoogleLoginButton from '../components/login/GoogleLoginButton';
import LoginButton from '../components/login/LoginButton';
import LoginFooter from '../components/login/LoginFooter';
import Toast from '../components/global/Toast';

export default function LoginFormPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const navigate = useNavigate();

  // Check if user is already authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      console.log('Attempting login...');
      const result = await loginUser({ email, password });
      console.log('Login successful:', result);
      
      // Show success toast
      setToast({
        show: true,
        message: 'Login successful! Redirecting to dashboard...',
        type: 'success'
      });
      
      // Navigate after a short delay to show the toast
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
      
    } catch (e) {
      console.error('Login error:', e);
      const errorMessage = String(e);
      
      // Show error toast
      setToast({
        show: true,
        message: errorMessage,
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeToast = () => {
    setToast({ show: false, message: '', type: 'success' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-4">
      <div className="w-[584px] h-auto rounded-[20px] bg-[var(--bg-secondary)] shadow-2xl border border-[var(--border-primary)] p-8">
        <LoginHeader />
        
        {/* Backend-driven auth — enter your credentials below */}

        <form onSubmit={(e) => e.preventDefault()}>
          <LoginForm 
            email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
          />
        </form>

        <LoginDivider />
        <GoogleLoginButton />
        <LoginButton isLoading={isLoading} onClick={handleSignIn} />
        <LoginFooter />
      </div>
      
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={closeToast}
      />
    </div>
  );
}
