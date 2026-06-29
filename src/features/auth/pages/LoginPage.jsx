const loginFields = [
  {
    id: 'email',
    label: 'Email address',
    type: 'email',
    autoComplete: 'email',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    autoComplete: 'current-password',
  },
]

function LoginForm() {
  return (
    <div className="w-full max-w-[468px]">
      <div className="mb-9 flex justify-center">
        <img
          src="/black_dot_logo.png"
          alt="Blackdot Technologies"
          className="h-auto w-[171px]"
        />
      </div>

      <div className="text-center">
        <h1 className="text-[39px] leading-none font-semibold tracking-[-0.03em] text-[#1D2634]">
          Welcome
        </h1>
        <p className="mt-[30px] text-[15px] leading-none font-normal text-[#6F7A8A]">
          Welcome to Split IQ - Lets sign you in
        </p>
      </div>

      <form className="mt-[29px]" aria-label="Login form">
        <div className="space-y-[27px]">
          {loginFields.map((field) => (
            <label key={field.id} htmlFor={field.id} className="block">
              <span className="block text-[24px] leading-none font-normal text-[#222733]">
                {field.label}
              </span>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                autoComplete={field.autoComplete}
                className="mt-[23px] block h-[1px] w-full border-0 border-b border-[#D8DCE2] bg-transparent px-0 py-0 text-[22px] text-[#1D2634] outline-none transition-colors focus:border-[#1D2634]"
              />
            </label>
          ))}
        </div>

        <div className="mt-[23px] flex justify-end">
          <a
            href="#forgot-password"
            className="text-[15px] leading-none font-normal text-[#6F7A8A] transition-colors hover:text-[#1D2634]"
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="mt-[26px] h-[53px] w-full rounded-full bg-[#1D2634] text-[15px] leading-none font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#1D2634] focus-visible:ring-offset-2 focus-visible:outline-none active:translate-y-0"
        >
          LOGIN
        </button>

        <p className="mt-[30px] text-center text-[15px] leading-none font-normal text-[#6F7A8A]">
          Don't have an account ?{' '}
          <a
            href="#signup"
            className="font-medium text-[#1D2634] transition-colors hover:text-[#111827]"
          >
            Signup
          </a>
        </p>
      </form>
    </div>
  )
}

function BrandPanel() {
  return (
    <aside className="hidden min-h-[calc(100vh-32px)] items-center justify-center rounded-xl bg-[#1D2634] lg:flex">
      <img
        src="/split_iq_logo_white.png"
        alt="Split IQ"
        className="h-auto w-[320px]"
      />
    </aside>
  )
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] p-4 text-[#1D2634]">
      <section className="grid min-h-[calc(100vh-32px)] grid-cols-1 lg:grid-cols-[1fr_minmax(420px,43.5%)]">
        <div className="flex min-h-[calc(100vh-32px)] items-center justify-center px-6 pt-[2px] pb-8 lg:justify-center">
          <LoginForm />
        </div>
        <BrandPanel />
      </section>
    </main>
  )
}
