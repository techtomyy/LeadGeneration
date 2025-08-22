import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/login/LoginHeader';
import LoginForm from '../components/login/LoginForm';
import LoginDivider from '../components/login/LoginDivider';
import GoogleLoginButton from '../components/login/GoogleLoginButton';
import LoginButton from '../components/login/LoginButton';
import LoginFooter from '../components/login/LoginFooter';

export default function LoginFormPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Demo credentials
  const demoCredentials = {
    email: 'demo@leadsgenerator.com',
    password: 'demo123'
  };

  const handleSignIn = async () => {
    setError('');
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if credentials match demo account
    if (email === demoCredentials.email && password === demoCredentials.password) {
      // Success - redirect to dashboard
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Use demo@leadsgenerator.com / demo123');
    }

    setIsLoading(false);
  };

  const handleDemoLogin = () => {
    setEmail(demoCredentials.email);
    setPassword(demoCredentials.password);
    setError('');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-4">
      <div className="w-[584px] h-auto rounded-[20px] bg-[var(--bg-secondary)] shadow-2xl border border-[var(--border-primary)] p-8">
        <LoginHeader />
        
        {/* Demo Account Info */}
        <div className="mb-6 p-4 bg-gradient-to-r from-[var(--btn-primary)] to-[var(--btn-secondary)] rounded-lg">
          <h3 className="text-[var(--bg-accent)] font-semibold mb-2">Demo Account</h3>
          <p className="text-[var(--bg-accent)] text-sm mb-3">
            Use these credentials to sign in:
          </p>
          <div className="text-[var(--bg-accent)] text-sm space-y-1">
            <div><strong>Email:</strong> demo@leadsgenerator.com</div>
            <div><strong>Password:</strong> demo123</div>
          </div>
          <button
            onClick={handleDemoLogin}
            className="mt-3 px-4 py-2 bg-[var(--bg-accent)] text-[var(--btn-primary)] rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            Fill Demo Credentials
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg">
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        )}

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
    </div>
  );
}
