import Image from "next/image";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
];

export default function Navbar() {
    return (
        <header className="w-full border-b border-gray-500/30 text-[#F5F5F6] bg-[#003BE2]">
            <nav className="container-page flex h-30 items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="shrink-0"
                    aria-label="ByteSpace home"
                >
                    <Image
                        src="/logo.png"
                        alt="ByteSpace"
                        width={171}
                        height={37}
                        priority
                    />
                </Link>

                {/* Navigation */}
                <ul className="flex items-center gap-10">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="text-[15px] font-medium text-foreground transition-colors "
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-7">
                    <Link
                        href="/login"
                        className="text-[15px] font-medium text-foreground transition-colors "
                    >
                        Login
                    </Link>

                    <Link
                        href="/register"
                         className="text-[15px] font-medium text-foreground transition-colors "
                    >
                        Join Us
                    </Link>

                    <Link
                        href="/cart"
                        className="flex items-center justify-center transition-opacity hover:opacity-60"
                        aria-label="Shopping cart"
                    >
                        <AiOutlineShopping size={22} />
                    </Link>
                </div>
            </nav>
        </header>
    );
}