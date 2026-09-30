import NotFoundContent from "@/components/features/not-found/not-found-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 - Page Not Found | ByteSpace",
    description: "The page you are looking for doesn't exist.",
};

export default function NotFound() {
    return <NotFoundContent />;
}
