

import { Navs } from '@/interface/nav';
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from '@/ui/Footer';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterComponent({ navItems }: { navItems: Navs[] }) {
    return (
        <Footer container className='mt-4'>
            <div className="w-full">
                {/* <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-6 sm:gap-6">
                        {navItems.map(navItem => (
                            <div key={navItem.link}>
                                <FooterTitle title={navItem.name} />
                                <FooterLinkGroup col>
                                    {navItem.children?.map(child => (
                                        <FooterLink key={child.link} href={child.link}>{child.name}</FooterLink>
                                    ))}
                                </FooterLinkGroup>
                            </div>
                        ))}
                    </div>
                </div> */}
                <FooterDivider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright href="#" by="Faabs" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterIcon href="#" icon={BsFacebook} />
                        <FooterIcon href="#" icon={BsInstagram} />
                        <FooterIcon href="#" icon={BsTwitter} />
                        <FooterIcon href="#" icon={BsGithub} />
                        <FooterIcon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
