export default function Login() {
  return (
    <div className="bg-[url(/login.jpeg)] w-full h-full bg-cover pt-25">
      <div className="flex items-center justify-center">
        {/* card */}
        <div className="card bg-base-100 w-96 shadow-sm h-120 text-black">
          <div className="card-body">
            <h2 className="card-title text-3xl">Login</h2>
            <form action="">
              <label className="input validator">
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  required
                  placeholder="Username"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength={3}
                  maxLength={30}
                  title="Only letters, numbers or dash"
                />
              </label>
            </form>
            <p className="validator-hint">
              Must be 3 to 30 characters
              <br />
              containing only letters, numbers or dash
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-black">
          <h1 className="text-3xl">Login</h1>

          <label className="label text-black">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label text-black">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4 rounded-lg">Login</button>
          <div className="divider">or</div>
          <button className="btn btn-neutral mt-4 rounded-lg">Login</button>
        </fieldset> */}
      </div>
    </div>
  );
}
