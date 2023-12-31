'use client'

import { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface TaskListProps {
    id: number;
    name: string;
    url: string;
    haveWord: boolean;
    word: string;
    setWordList(newWordList: string[]): void;
    wordList: string[];
}

const ChapterLeft: React.FC<TaskListProps> = ({ id, name, url, haveWord, word, setWordList, wordList }) => {
    const [currentTry, setCurrentTry] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);
    const [wordMatch, setWordMatch] = useState<boolean>(false);
    const [isExploding, setIsExploding] = useState<boolean>(false);

    const handleWordValidation = (): void => {
        const currentWordList = JSON.parse(localStorage.getItem('wordList') || '[]');
        if (currentTry.toLowerCase() === word.toLowerCase()) {
            currentWordList.push(word.toLowerCase());
            localStorage.setItem('wordList', JSON.stringify(currentWordList));
            setIsExploding(true);
            playSound();
            setWordMatch(true);
            setWordList(currentWordList);
            
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

    const playSound = (): void => {
        let audio: HTMLAudioElement = new Audio('/music/loop_song_long.wav');
        audio.volume =  0.2;
        audio.play();
    }

    return (
        <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col mt-12 max-w-screen w-full" id={'chapter_' + id}>
            <iframe src={url} allowFullScreen className="flex xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-[320px] h-[310px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-4 content-center justify-center border-white border-4" />
            <div className="flex xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-[320px] content-center justify-center">
                <div className={haveWord ? "flex flex-col w-4/6 max-w-4/6 px-2 py-6" : "flex flex-col w-4/6 max-w-4/6 px-2 py-2"}>
                    <div className={haveWord ? "bubble grow right min-w-full" : "min-w-full bubble grow right xl:max-h-24 lg:max-h-24 md:max-h-24"}>
                        <div className={haveWord ? "font-outfit text-2xl mt-5" : "font-outfit text-2xl mt-2"}>
                            <b>{name}</b>
                        </div>
                        <div className="font-outfit text-2xl mt-5">
                            {haveWord && <> La palabra secreta es:</>}
                        </div>
                        <div className="font-outfit text-2xl mt-5">
                            {
                                !wordMatch && haveWord &&
                                <div className="flex flex-row">
                                    <input
                                        className={`w-4/6 border-b-2 ${showError && 'shake-error'}`}
                                        placeholder="??????????????????"
                                        type="text"
                                        onChange={(e) => setCurrentTry(e.target.value)}
                                        onKeyDown={handlePressEnterButton}
                                    />
                                    <PaperAirplaneIcon
                                        onClick={handleWordValidation}
                                        className="w-2/6 h-10 hover:cursor-pointer"
                                    />
                                </div>
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
                <div className="flex w-2/6 mt-10 ml-8">
                    <img
                        className="xl:h-[198px] lg:h-[198px] md:h-[198px] xl:w-[169px] lg:w-[169px] md:w-[169px] sm:absolute sm:w-[90px] sm:h-[120px] animate-[wiggle_3s_ease-in-out_infinite]"
                        src="/logo/lucho.png" />
                </div>
            </div>
        </div>
    );
}

export default ChapterLeft;