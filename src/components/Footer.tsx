import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    const socialLinks = [
        {
            icon: '/github-svgrepo-com.svg',
            url: 'https://github.com/arkp1',
            label: 'GitHub'
        },
        {
            icon: '/linkedin-svgrepo-com.svg',
            url: 'https://www.linkedin.com/in/a-r-k-praneet-1ba4592b8/',
            label: 'LinkedIn'
        }
    ];

    return (
        <footer className="w-full py-4 mt-auto bg-neutral-900/50 backdrop-blur-sm border-t border-neutral-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center gap-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                            aria-label={link.label}
                        >
                            <Image
                                src={link.icon}
                                alt={link.label}
                                width={24}
                                height={24}
                                className="invert"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;