import Image from "next/image";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const navItems = [
    { label: "Home", href: "/", active: true },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
];

export default function Navbar() {
    return (
        <header className="w-full bg-[#003BE2] text-[#F5F5F6] relative z-50 hero-grid-pattern">
            <nav className="container-page flex h-25 md:h-30 items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="shrink-0 transition-transform hover:scale-[1.02]"
                    aria-label="ByteSpace home"
                >
                    <Image
                        src="/logo.png"
                        alt="ByteSpace"
                        width={171}
                        height={37}
                        priority
                        className="h-8 md:h-9.25 w-auto"
                    />
                </Link>

                {/* Main Navigation Links */}
                <ul className="hidden md:flex items-center gap-8 lg:gap-10">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                className={`text-[16px] transition-colors duration-200 ${
                                    item.active
                                        ? "text-white font-medium"
                                        : "text-[#F5F5F6]/80 hover:text-white font-normal"
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Action Menu */}
                <div className="flex items-center gap-6 md:gap-7">
                    <Link
                        href="/login"
                        className="text-[16px] text-[#F5F5F6]/85 hover:text-white transition-colors duration-200 font-normal"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/register"
                        className="text-[16px] text-[#F5F5F6]/85 hover:text-white transition-colors duration-200 font-normal"
                    >
                        Join Us
                    </Link>

                    <Link
                        href="/cart"
                        className="flex items-center justify-center p-1.5 text-white/90 hover:text-white hover:scale-110 transition-all duration-200"
                        aria-label="Shopping cart"
                    >
                        <AiOutlineShopping size={24} />
                    </Link>
                </div>
            </nav>
        </header>
    );
}