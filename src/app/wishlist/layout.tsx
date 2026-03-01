import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist",
  description:
    "Your saved fragrances — browse your wishlist and add your favorites to your bag.",
};

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
