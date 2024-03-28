export const metadata = {
    title: 'Sign Up - Mosaic',
    description: 'Page description',
}

import Link from 'next/link'
import AuthHeader from './auth-header'
import AuthImage from './auth-image'
import Signup from './signup'

export default function SignUp() {
    return (
        <main className="bg-white dark:bg-slate-900">

            <div className="relative md:flex">

                {/* Content */}
                <div className="md:w-1/2">
                    <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

                        <AuthHeader />

                        <div className="max-w-sm mx-auto w-full px-4 py-8">
                            <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Create your Account ✨</h1>
                            {/* Form */}
                            <Signup />
                            {/* Footer */}
                            <div className="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">
                                <div className="text-sm">
                                    Have an account? <Link className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="/signin">Sign In</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <AuthImage />

            </div>

        </main>
    )
}
