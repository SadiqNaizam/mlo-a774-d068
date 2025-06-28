import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthFormWrapper from '@/components/AuthFormWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from "@/components/ui/checkbox";

const LoginPage = () => {
  console.log('LoginPage loaded');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle authentication logic here.
    // For this example, we'll just navigate to the dashboard.
    console.log('Login successful, navigating to dashboard...');
    navigate('/dashboard');
  };

  return (
    <AuthFormWrapper
      title="Login"
      description="Enter your email below to login to your account."
      showSocialLogins={true}
      footerContent={
        <>
          {"Don't have an account? "}
          <Link to="/sign-up" className="text-primary hover:underline">
            Sign Up
          </Link>
        </>
      }
    >
      <form onSubmit={handleLogin} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              to="/forgot-password"
              className="ml-auto inline-block text-sm text-primary hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="remember-me" />
            <Label htmlFor="remember-me" className="text-sm font-normal text-muted-foreground">Remember me</Label>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </AuthFormWrapper>
  );
};

export default LoginPage;