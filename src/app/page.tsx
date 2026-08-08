"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const VERTICAL_WORD = "THIRTYONE";
const HORIZONTAL_WORD = "HANNA";

const GRID_ROWS = 9;
const GRID_COLS = 5;
const VERTICAL_COL = 2;
const HORIZONTAL_ROW = 7;

function isActiveCell(row: number, col: number) {
    const isVertical = col === VERTICAL_COL && row < VERTICAL_WORD.length;
    const isHorizontal = row === HORIZONTAL_ROW && col < HORIZONTAL_WORD.length;
    return isVertical || isHorizontal;
}

export default function Home() {
    const router = useRouter();
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [error, setError] = useState("");
    const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

    const getCellValue = (row: number, col: number) => answers[`${row}-${col}`] || "";

    const getNextActiveCell = (row: number, col: number): [number, number] | null => {
        const startIndex = row * GRID_COLS + col;

        for (let index = startIndex + 1; index < GRID_ROWS * GRID_COLS; index += 1) {
            const nextRow = Math.floor(index / GRID_COLS);
            const nextCol = index % GRID_COLS;

            if (isActiveCell(nextRow, nextCol)) {
                return [nextRow, nextCol];
            }
        }

        return null;
    };

    const getWordFromGrid = (positions: Array<[number, number]>) =>
        positions.map(([row, col]) => getCellValue(row, col)).join("").toUpperCase();

    const handleCellChange = (row: number, col: number, value: string) => {
        const key = `${row}-${col}`;
        const letter = value.slice(-1).toUpperCase().replace(/[^A-Z]/g, "");

        setAnswers((prev) => ({
            ...prev,
            [key]: letter,
        }));

        if (!letter) {
            return;
        }

        const nextCell = getNextActiveCell(row, col);
        if (!nextCell) {
            return;
        }

        const [nextRow, nextCol] = nextCell;
        const nextKey = `${nextRow}-${nextCol}`;
        inputRefs.current[nextKey]?.focus();
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const verticalPositions: Array<[number, number]> = Array.from(
            { length: VERTICAL_WORD.length },
            (_, row) => [row, VERTICAL_COL]
        );
        const horizontalPositions: Array<[number, number]> = Array.from(
            { length: HORIZONTAL_WORD.length },
            (_, col) => [HORIZONTAL_ROW, col]
        );

        const verticalAnswer = getWordFromGrid(verticalPositions);
        const horizontalAnswer = getWordFromGrid(horizontalPositions);

        if (verticalAnswer === VERTICAL_WORD && horizontalAnswer === HORIZONTAL_WORD) {
            setError("");
            router.push("/projects");
            return;
        }

        setError("Inte löst än. Fyll i båda orden och försök igen.");
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_12%_15%,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(244,114,182,0.15),transparent_35%),linear-gradient(145deg,#09090b_0%,#18181b_45%,#111827_100%)] px-4 py-10 flex items-center justify-center">
            <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-12 h-64 w-64 rounded-full bg-pink-400/20 blur-3xl" />

            <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/20 bg-zinc-900/65 p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-md sm:p-10">
                <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-cyan-200/90">HEMLIG UTMANING</p>
                <h1 className="text-4xl font-black leading-tight text-white mb-3 sm:text-5xl">Hemligt kryss</h1>
                <p className="text-zinc-300 mb-8 text-lg">Lös krysset för att låsa upp sidan.</p>

                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <div className="rounded-2xl border border-white/15 bg-black/25 p-4 sm:p-5">
                        <div className="grid grid-cols-5 gap-1.5 w-fit mx-auto">
                        {Array.from({ length: GRID_ROWS }).map((_, row) =>
                            Array.from({ length: GRID_COLS }).map((__, col) => {
                                const active = isActiveCell(row, col);

                                if (!active) {
                                    return (
                                        <div
                                            key={`${row}-${col}`}
                                            className="h-10 w-10 rounded-md border border-zinc-700/80 bg-zinc-900/70"
                                        />
                                    );
                                }

                                return (
                                    <input
                                        key={`${row}-${col}`}
                                        ref={(element) => {
                                            inputRefs.current[`${row}-${col}`] = element;
                                        }}
                                        type="text"
                                        inputMode="text"
                                        maxLength={1}
                                        autoComplete="off"
                                        value={getCellValue(row, col)}
                                        onChange={(event) =>
                                            handleCellChange(row, col, event.target.value)
                                        }
                                        className="h-10 w-10 rounded-md border border-zinc-300 bg-white text-center text-lg font-extrabold uppercase text-zinc-900 outline-none transition focus:scale-105 focus:ring-2 focus:ring-cyan-300"
                                        aria-label={`Kryssruta ${row + 1}-${col + 1}`}
                                    />
                                );
                            })
                        )}
                        </div>
                    </div>

                    <div className="mt-2 grid gap-2 text-sm sm:grid-cols-2">
                        <p className="rounded-xl border border-white/10 bg-zinc-800/70 px-3 py-2 text-zinc-100 text-center">
                            <span className="font-semibold text-cyan-200">Vågrät ledtråd:</span> Födelsedagstjej
                        </p>
                        <p className="rounded-xl border border-white/10 bg-zinc-800/70 px-3 py-2 text-zinc-100 text-center">
                            <span className="font-semibold text-cyan-200">Lodrät ledtråd:</span> 31 på engelska (bokstäver)
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 rounded-xl bg-gradient-to-r from-cyan-300 to-sky-400 text-zinc-900 px-5 py-3 font-bold tracking-wide transition hover:brightness-105"
                    >
                        Kontrollera kryss
                    </button>
                    {error && <p className="text-red-400 text-center">{error}</p>}
                </form>
            </div>
        </main>
    );
}
