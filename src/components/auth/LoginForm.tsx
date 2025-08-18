'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';

export const schemaLogin = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type formSchemaLogin = z.infer<typeof schemaLogin>;

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<formSchemaLogin>({
    resolver: zodResolver(schemaLogin),
  });

  const onSubmit: SubmitHandler<formSchemaLogin> = (data) => {
    console.log('Form Data', data);
    router.push('/');
  };

  return (
    <div className="min-h-screen pt-18">
      <div className="flex items-center justify-center">
        {/* card */}
        <div className="card bg-base-100 w-96 shadow-lg text-black">
          <div className="card-body">
            <div>
              <h2 className="card-title text-2xl font-bold uppercase">Login</h2>
              <p className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
                exercitationem?
              </p>
            </div>
            <form
              action=""
              className="flex flex-col gap-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* Email */}
              <div>
                <label htmlFor="email" className="fieldset-legend">
                  Email
                </label>
                <div className="input validator w-full">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    id="email"
                    placeholder="mail@site.com"
                    required
                    {...form.register('email')}
                  />
                </div>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>

              {/* Passwors */}
              <div>
                <label htmlFor="password" className="fieldset-legend">
                  Password
                </label>
                <div className="input validator w-full">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type="password"
                    id="password"
                    required
                    placeholder="Password"
                    minLength={8}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    {...form.register('password')}
                  />
                </div>
                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number <br />
                  At least one lowercase letter <br />
                  At least one uppercase letter
                </p>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <div className="card-actions justify-center mt-3">
                <button
                  type="submit"
                  className="btn btn-primary w-full rounded-lg"
                >
                  Login
                </button>
              </div>
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
            <div className="divider my-3">or</div>

            {/* Google */}
            <div className="flex justify-center">
              <button className="btn rounded-lg w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="w-5"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
