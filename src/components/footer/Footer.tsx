import Link from "next/link";
import { FlexContainer } from "../flexContainer";
import { IconLink } from "../links/iconLink";

export function Footer() {
    return (
        <footer className="border-t-2 border-zinc-700">
            <div className="container mx-auto px-5 w-4/5">
                <FlexContainer 
                    direction="row"
                    justifyContent="between"
                    alignItems="center"
                    className="text-neutral-300 w-full h-56 relative">
                    <div>
                        <p className={`font-bold mb-1 font text-3xl`}>
                            Simon Bonnier
                        </p>
                        <p className="font-bold text-neutral-500">
                            Copyright &copy; 2023
                        </p>
                    </div>
                    <FlexContainer direction="row" gapX={20}>
                        <FlexContainer direction="row" gap={28} className="mb-5">
                            <Link href={"/"}>Home</Link>
                            <FlexContainer direction="col" gap={2}>
                                <Link href={"/"}>Blog</Link>
                                <Link href={"/"}>Latest post</Link>
                                <Link href={"/"}>Most recent</Link>
                                <Link href={"/"}>Most popular</Link>
                            </FlexContainer>
                            <Link href={"/"}>About</Link>
                        </FlexContainer>
                        <FlexContainer direction="col" gap={5} className="mb-5">
                            <IconLink href={"/"}>Instagram</IconLink>
                            <IconLink href={"/"}>GitHub</IconLink>
                            <IconLink href={"/"}>Facebook</IconLink>
                            <IconLink href={"/"}>Twitter</IconLink>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
            </div>
        </footer>
    )
}