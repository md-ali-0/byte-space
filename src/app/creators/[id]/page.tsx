import CreatorProfileContent from "@/components/features/creators/creator-profile-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Creator Profile - ByteSpace",
    description:
        "Discover inspiring creators and their courses on ByteSpace.",
};

export default function CreatorDetailPage() {
    return <CreatorProfileContent />;
}
