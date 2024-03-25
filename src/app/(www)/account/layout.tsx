export const metadata = {
    title: 'Account Settings - Mosaic',
    description: 'Page description',
}

import SettingsSidebar from './settings-sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">


            {/* Content */}
            <div className="bg-white dark:bg-slate-800 rounded-sm mb-8">
                <div className="flex flex-col md:flex-row md:-mr-px">

                    <SettingsSidebar />
                    {children}

                </div>
            </div>

        </div>
    )
}