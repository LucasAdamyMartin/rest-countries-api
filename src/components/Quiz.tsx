"use client";

import { useEffect, useState } from "react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Country as CountryType } from "../types/Country";

type HomeProps = { data: CountryType[] | undefined };

export default function Quiz({ data }: HomeProps) {
  const [currentCountry, setCurrentCountry] = useState<CountryType | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);

  if (!data) {
    return (
      <div className="flex flex-col items-center gap-4 mt-10 text-center">
        <p>Oops! Une erreur est survenue.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Réessayer
        </button>
      </div>
    );
  }

  const pickRandomCountry = () => {
    const random = data[Math.floor(Math.random() * data.length)];
    setCurrentCountry(random);
    setUserAnswer("");
    setFeedback("");
    setHasAnswered(false);
  };

  useEffect(() => {
    pickRandomCountry();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCountry) return;

    const isCorrect = userAnswer.trim().toLowerCase() === currentCountry.translations.fr.toLowerCase();
    setFeedback(isCorrect ? "✅ Bonne réponse !" : `❌ Mauvaise réponse. C'était ${currentCountry.translations.fr}`);
    setHasAnswered(true);
  };

  return (
    <main className="flex flex-col items-center dark:bg-veryDarkBlueBg w-full flex-1">
      <div className="flex flex-col w-full max-w-[1440px]">
        <div className="flex items-center justify-start lg:p-17 p-5 pt-7 pb-10">
          <a
            aria-label="toggle back"
            href="/"
            className="flex flex-row items-center justify-center gap-2 p-1 shadow-md dark:text-white rounded-sm dark:border dark:border-veryDarkBlueText dark:bg-darkBlue w-[100px]"
          >
            <ArrowLongLeftIcon className="size-6" />
            <p className="font-light text-[14px]">Back</p>
          </a>
        </div>

        <div className="flex flex-col items-center px-5">
          {currentCountry && (
            <>
              <img
                className="sm:w-[550px] w-[360px] h-[225px] sm:h-[400px] mb-6"
                src={currentCountry.flags.png}
                alt={`${currentCountry.name} flag`}
              />

              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-sm">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Quel est ce pays ?"
                  className="w-full p-2 border rounded dark:bg-darkBlue dark:text-white"
                  disabled={hasAnswered}
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  disabled={hasAnswered}
                >
                  Valider
                </button>
              </form>

              {feedback && (
                <p className="mt-4 text-lg font-medium dark:text-white">{feedback}</p>
              )}

              {hasAnswered && (
                <button
                  onClick={pickRandomCountry}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Pays suivant
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
