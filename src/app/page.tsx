"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const ACCESS_PASSWORD = "Hanna31";

export default function Home() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password === ACCESS_PASSWORD) {
            setError("");
            router.push("/projects");
            return;
        }

        setError("Wrong password. Please try again.");
    };

    return (
        <main className="min-h-[70vh] flex items-center justify-center">
            <div className="w-full max-w-md rounded-xl border border-zinc-700 bg-zinc-800/40 p-8">
                <h1 className="text-3xl font-bold mb-2">Enter super secret password</h1>
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                        className="rounded-md border border-zinc-600 bg-zinc-900 px-3 py-2 outline-none focus:border-zinc-300"
                    />
                    <button
                        type="submit"
                        className="rounded-md bg-white text-zinc-900 px-4 py-2 font-semibold hover:bg-zinc-200"
                    >
                        Enter
                    </button>
                    {error && <p className="text-red-400">{error}</p>}
                </form>
            </div>
        </main>
    );
}
