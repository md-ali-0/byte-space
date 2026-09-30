import CreatorProfileContent from "@/components/features/creators/creator-profile-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PurePearl Studio (Creator) - ByteSpace",
    description:
        "Welcome to the creative world of PurePearl Studio. Discover courses, design assets, and creative insights.",
};

export default function CreatorsPage() {
    return <CreatorProfileContent />;
}
