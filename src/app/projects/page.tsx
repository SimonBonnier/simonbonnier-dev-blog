const confetti = [
    { left: "6%", delay: "0s", duration: "4.8s", color: "#ffd166" },
    { left: "14%", delay: "1.1s", duration: "5.5s", color: "#ef476f" },
    { left: "25%", delay: "0.3s", duration: "6.1s", color: "#06d6a0" },
    { left: "36%", delay: "1.7s", duration: "5.2s", color: "#118ab2" },
    { left: "45%", delay: "0.8s", duration: "6.4s", color: "#f78c6b" },
    { left: "56%", delay: "1.3s", duration: "4.9s", color: "#ffd166" },
    { left: "66%", delay: "0.1s", duration: "6.7s", color: "#7bdff2" },
    { left: "74%", delay: "1.5s", duration: "5.6s", color: "#ff6b6b" },
    { left: "84%", delay: "0.5s", duration: "6.2s", color: "#9b5de5" },
    { left: "93%", delay: "1.9s", duration: "5s", color: "#06d6a0" },
];

export default function ProjectsPage() {
    return (
        <main className="birthday-page relative min-h-screen overflow-hidden px-4 py-16 sm:px-8">
            <div className="birthday-glow birthday-glow-left" aria-hidden="true" />
            <div className="birthday-glow birthday-glow-right" aria-hidden="true" />

            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                {confetti.map((piece, index) => (
                    <span
                        key={`${piece.left}-${index}`}
                        className="confetti-piece"
                        style={{
                            left: piece.left,
                            animationDelay: piece.delay,
                            animationDuration: piece.duration,
                            backgroundColor: piece.color,
                        }}
                    />
                ))}
            </div>

            <section className="birthday-card mx-auto max-w-5xl rounded-[2.4rem] p-8 text-center sm:p-12">
                <p className="birthday-kicker mb-2 text-sm tracking-[0.35em] text-amber-100/90">
                    IDAG ÄR DIN DAG
                </p>
                <h1 className="birthday-title text-5xl font-black leading-tight text-amber-50 sm:text-7xl">
                    Grattis på födelsedagen
                    <br />
                    Hanna!
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-50/90 sm:text-2xl">
                    Hoppas du får en fantastisk födelsedag med både skratt, kärlek och enorma mängder godis.
                </p>

                <div className="mt-12 flex justify-center" aria-hidden="true">
                    <div className="cake-scene relative">
                        <div className="cake-plate" />

                        <div className="cake-body">
                            <div className="cake-drip cake-drip-1" />
                            <div className="cake-drip cake-drip-2" />
                            <div className="cake-drip cake-drip-3" />
                            <div className="cake-sprinkles" />
                        </div>

                        <div className="candles">
                            <div className="candle candle-1">
                                <span className="flame flame-a" />
                            </div>
                            <div className="candle candle-2">
                                <span className="flame flame-b" />
                            </div>
                            <div className="candle candle-3">
                                <span className="flame flame-c" />
                            </div>
                            <div className="candle candle-4">
                                <span className="flame flame-d" />
                            </div>
                        </div>

                        <div className="cake-number">31</div>
                    </div>
                </div>

                <p className="mt-10 text-base text-amber-100/90 sm:text-lg">
                    Önska dig något och blås ut ljusen.
                </p>
            </section>
        </main>
    );
}
