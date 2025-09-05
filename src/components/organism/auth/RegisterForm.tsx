'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  AuthCard,
  Button,
  CardActions,
  Divider,
  Email,
  Google,
  InputWithLabel,
  Key,
  Username,
} from '@/components';
import { formSchemaRegister, schemaRegister } from '@/validator';

export default function RegisterForm() {
  const router = useRouter();

  const form = useForm<formSchemaRegister>({
    resolver: zodResolver(schemaRegister),
  });

  const onSubmit: SubmitHandler<formSchemaRegister> = (data) => {
    console.log('Form Data', data);
    router.push('/login');
  };

  return (
    <div className=" min-h-screen bg-cover pt-18 pb-18">
      <div className="flex items-center justify-center">
        {/* card */}
        <AuthCard title="register" subTittle="Please Regist dulu">
          <form
            action=""
            className="flex flex-col gap-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Username */}
            <InputWithLabel
              label="Username"
              type="text"
              id="username"
              htmlFor="username"
              className=""
              icon={<Username className="h-[1em] opacity-50" />}
              placeholder="username"
            />

            {/* Email */}
            <InputWithLabel
              label="Email"
              type="email"
              id="email"
              htmlFor="email"
              // className={clsx(errors.email ? 'border-red-500' : '')}
              placeholder="mail@site.com"
              icon={<Email className="h-[1em] opacity-50" />}
              // {...register('email')}
            />

            {/* Passwors */}
            <InputWithLabel
              label="Password"
              type="password"
              id="password"
              htmlFor="password"
              // className={clsx(errors.password ? 'border-red-500' : '')}
              placeholder="************ "
              icon={<Key className="h-[1em] opacity-50" />}
              // {...register('password')}
            />
            <CardActions className=" justify-center mt-3">
              <Button type="submit" className="w-full" variant="primary">
                Register
              </Button>
            </CardActions>
          </form>

          {/* Register */}
          <span>
            Sudah punya akun?{' '}
            <Link
              href={'/login'}
              className="underline underline-offset-1 text-blue-500"
            >
              Login
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
