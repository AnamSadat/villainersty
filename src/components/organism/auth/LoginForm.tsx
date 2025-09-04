'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthCard, Button, Divider, Key } from '@/components';
import { InputWithLabel } from '@/components';
import { CardActions } from '@/components';
import clsx from 'clsx';
import { formSchemaLogin, schemaLogin } from '@/validator';
import { Email, Google } from '@/components';

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchemaLogin>({
    resolver: zodResolver(schemaLogin),
  });

  const onSubmit: SubmitHandler<formSchemaLogin> = (data) => {
    console.log('Form Data', data);
    router.push('/');
  };

  return (
    <div className="min-h-screen pt-18 pb-18">
      <div className="flex items-center justify-center">
        {/* card */}
        <AuthCard title="Login" subTittle="Welcome back! Please login">
          <form
            action=""
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email */}
            <InputWithLabel
              label="Email"
              type="email"
              id="email"
              htmlFor="email"
              className={clsx(errors.email ? 'border-red-500' : '')}
              placeholder="mail@site.com"
              icon={<Email className="h-[1em] opacity-50" />}
              {...register('email')}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            {/* Passwors */}
            <InputWithLabel
              label="Password"
              type="password"
              id="password"
              htmlFor="password"
              className={clsx(errors.password ? 'border-red-500' : '')}
              placeholder="************ "
              icon={<Key className="h-[1em] opacity-50" />}
              {...register('password')}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <CardActions className=" justify-center mt-3">
              <Button type="submit" className="w-full" variant="primary">
                Login
              </Button>
            </CardActions>
          </form>

          {/* Register */}
          <span>
            Belum punya akun?{' '}
            <Link
              href={'/register'}
              className="underline underline-offset-1 text-blue-500"
            >
              Register
            </Link>
          </span>

          {/* Divider */}
          <Divider>or</Divider>

          {/* Google */}
          <div className="flex justify-center">
            <Button className="rounded-lg w-full">
              <Google className="w-5" />
              Google
            </Button>
          </div>
        </AuthCard>
      </div>
    </div>
  );
}
