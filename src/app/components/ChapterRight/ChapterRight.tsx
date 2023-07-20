'use client'

import { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

interface TaskListProps {
    id: number;
    name: string;
    url: string;
    haveWord: boolean;
    word: string;
    setWordList(newWordList: string[]): void;
    wordList: string[];
}

const ChapterRight: React.FC<TaskListProps> = ({ id, name, url, haveWord, word, setWordList, wordList }) => {
    const [currentTry, setCurrentTry] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);
    const [wordMatch, setWordMatch] = useState<boolean>(false);
    const [isExploding, setIsExploding] = useState<boolean>(false);

    const handleWordValidation = (): void => {
        const currentWordList = JSON.parse(localStorage.getItem('wordList') || '[]');
        if (currentTry.toLowerCase() === word.toLowerCase()) {
            currentWordList.push(word.toLowerCase());
            localStorage.setItem('wordList', JSON.stringify(currentWordList));
            setWordMatch(true);
            setWordList(currentWordList);
            setIsExploding(true);
        }
        if (currentTry.length <= 3 || currentTry.toLowerCase() !== word.toLowerCase()) {
            handleInputError();
        }
    }

    const handlePressEnterButton = (event: any) => {
        if (event.key === 'Enter') {
            handleWordValidation();
        }
    }

    const handleInputError = (): void => {
        setShowError(true);
        setTimeout(() => {
            setShowError(false);
        }, (1000))
    }

    useEffect(() => {
        const currentWordList = JSON.parse(localStorage.getItem('wordList') || '[]');
        if (currentWordList && currentWordList.length > 0 && currentWordList.includes(word.toLowerCase())) {
            setWordMatch(true);
        }
    }, [])

    return (
        <div className="w-full flex flex-row mt-24" id={'chapter_' + id}>
            <div className="flex w-1/2 content-center justify-center">
                <div className="flex w-2/6 mt-16 ml-10">
                    <img
                        className="h-[198px] w-[169px] animate-[wiggle_3s_ease-in-out_infinite]"
                        src="/logo/claudio.png" />
                </div>
                <div className={haveWord ? "flex flex-col w-2/4 px-2 py-6" : "flex flex-col w-2/4 px-2 py-2 mt-24"}>
                    <div className={haveWord ? "bubble grow left min-w-full" : "min-w-full bubble grow left max-h-16"}>
                        <div className={haveWord ? "font-outfit text-2xl mt-5" : "font-outfit text-2xl mt-2"}>
                            <b>{name}</b>
                        </div>
                        <div className="font-outfit text-2xl mt-5">
                            {haveWord && <> La palabra secreta es:</>}
                        </div>
                        <div className="font-outfit text-2xl mt-5">
                            {
                                !wordMatch && haveWord &&
                                <input
                                    className={`border-b-2 ${showError && 'shake-error'}`}
                                    placeholder="??????????????????"
                                    type="text"
                                    onChange={(e) => setCurrentTry(e.target.value)}
                                    onKeyDown={handlePressEnterButton}
                                />
                            }
                            {
                                wordMatch &&
                                word
                            }
                            {
                                isExploding &&
                                <ConfettiExplosion
                                    force={0.8}
                                    duration={3000}
                                    particleCount={250}
                                    width={1600}
                                    zIndex={100}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-1/2 content-center justify-center">
                <iframe
                    className="border-white border-4"
                    width="600"
                    height="335"
                    src={url}
                    allowFullScreen
                />
            </div>
        </div>
    );
}

export default ChapterRight;