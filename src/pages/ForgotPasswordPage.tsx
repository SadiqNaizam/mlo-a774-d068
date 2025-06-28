import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

import AuthFormWrapper from '@/components/AuthFormWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  console.log('ForgotPasswordPage loaded');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    
    // Simulate API call and show feedback as per the user journey
    toast.success('If an account with that email exists, a reset link has been sent.');

    // Clear the input after submission
    setEmail('');
  };

  return (
    <AuthFormWrapper
      title="Forgot Password"
      description="Enter your email below and we will send you a link to reset your password."
      showSocialLogins={false}
      footerContent={
        <>
          Remember your password?{' '}
          <Link to="/" className="font-semibold text-primary hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Send Reset Link
        </Button>
      </form>
    </AuthFormWrapper>
  );
};

export default ForgotPasswordPage;