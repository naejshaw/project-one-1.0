import Link from "next/link";

export default function Footer(){
    return (
        <footer className="w-full flex justify-center">
            <div className="footer_content">
                <div className="flex justify-center items-center gap-2.5 text-[#FEFEFE] info_company">
                </div>
            </div>
            <div className="text-[#1a1c19] bg-[#FEFEFE] text-sm flex justify-center items-center p-4 w-full footer_copyrighy">&copy; 2024 Codixp - All rights reserverd.</div>
            <Link href="/" className="fixed right-0 bottom-0 p-4 bg-[var(--primary)] rounded-lg border-[2px] border-[var(--secondary)]">Up</Link>
        </footer>
    )
}