import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();
	const homeNav = navItems[0];
	const aboutNav = navItems[1];
	const serviceNav = navItems[2];
	const industriesNav = navItems[3];
	const productsNav = navItems[4];
	const csrNav = navItems[5];
	const contactNav = navItems[6];
	const blogsNav = navItems[7];
	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							<li>
								<Link href="/">
									{homeNav?.name}
								</Link>
							</li>
							<li>
								<Link href={aboutNav?.path ? aboutNav?.path : "#"}>
									{aboutNav?.name}
								</Link>
							</li>

							<MobileMenuItem
								text={serviceNav?.name}
								url={serviceNav?.path ? serviceNav?.path : "#"}
								submenuClass={"mega-menu-service"}
							>
								{serviceNav?.submenu?.map((category, idx) => (
									<MobileMenuItem
										key={idx}
										text={category?.name}
										url={category?.path}
										submenuClass="mega-menu-service-nested"
									>
										{category?.items?.map((item, idx2) => (
											<li key={idx2}>
												<Link
													href={item?.path ? item?.path : "/"}
												>
													{item?.name}
												</Link>
											</li>
										))}
									</MobileMenuItem>
								))}
							</MobileMenuItem>

							<MobileMenuItem
								text={industriesNav?.name}
								url={industriesNav?.path ? industriesNav?.path : "#"}
								submenuClass={"mega-menu-service"}
							>
								{industriesNav?.submenu?.map((item, idx) => (
									<li key={idx}>
										<Link
											href={item?.path ? item?.path : "/"}
										>
											{item?.name}
										</Link>
									</li>
								))}
							</MobileMenuItem>

							<MobileMenuItem
								text={productsNav?.name}
								url={productsNav?.path ? productsNav?.path : "#"}
								submenuClass={"mega-menu-service"}
							>
								{productsNav?.submenu?.map((item, idx) => (
									<li key={idx}>
										<Link
											href={item?.path ? item?.path : "/"}
										>
											{item?.name}
										</Link>
									</li>
								))}
							</MobileMenuItem>

							<li>
								<Link href={csrNav?.path ? csrNav?.path : "#"}>
									{csrNav?.name}
								</Link>
							</li>
							<li>
								<Link href={blogsNav?.path ? blogsNav?.path : "#"}>
									{blogsNav?.name}
								</Link>
							</li>
							<li className="mean-last">
								<Link href={contactNav?.path ? contactNav?.path : "#"}>
									{contactNav?.name}
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
