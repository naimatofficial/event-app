import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
	return (
		<header className="w-full border-b">
			<div className="wrapper flex justify-between items-center">
				<Link href="/" className="w-36">
					<Image
						src={"/assets/images/logo.svg"}
						width={128}
						height={38}
						alt="Evently logo"
					/>
				</Link>

				<SignedIn>
					<nav className="md:flex-between hidden w-full max-w-xs">
						<NavItems />
					</nav>
				</SignedIn>

				<div className="flex w-32 justify-end gap-3">
					<SignedIn>
						<UserButton afterSignOutUrl="/" />
						<MobileNav />
					</SignedIn>
					<SignedOut>
						{/* Alternatively, you can set the asChild parameter and nest the link component. */}
						<Button asChild className="rounded-full" size="lg">
							<Link href="/sgin-in">Login</Link>
						</Button>
					</SignedOut>
				</div>
			</div>
		</header>
	);
};

export default Header;