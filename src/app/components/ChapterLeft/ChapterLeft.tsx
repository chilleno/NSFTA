import { useState } from 'react';

interface TaskListProps {
    id: number;
    name: string;
    url: string;
    haveWord: boolean;
    word: string;
}

const ChapterLeft: React.FC<TaskListProps> = ({ id, name, url, haveWord, word }) => {
    const [currentTry, setCurrentTry] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);

    const handleWordValidation = (): void => {
        if (currentTry.toLowerCase() === word.toLowerCase()) {
            alert('they match!');
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

    return (
        <div className="w-full flex flex-row mt-24" id={'chapter_' + id}>
            <div className="flex w-1/2 content-center justify-center">
                <iframe
                    className="border-white border-4"
                    width="600"
                    height="335"
                    src={url}
                    allowFullScreen
                />
            </div>
            <div className="flex w-1/2 content-center justify-center">
                <div className={haveWord ? "flex flex-col w-2/4 px-2 py-6" : "flex flex-col w-2/4 px-2 py-2 mt-24"}>
                    <div className={haveWord ? "bubble grow right min-w-full" : "min-w-full bubble grow right max-h-16"}>
                        <div className={haveWord ? "font-outfit text-2xl mt-5" : "font-outfit text-2xl mt-2"}>
                            <b>{name}</b>
                        </div>
                        <div className="font-outfit text-2xl mt-5">
                            {haveWord && <> La palabra secreta es:</>}
                        </div>
                        <div className="font-outfit text-2xl mt-5">
                            {
                                haveWord &&
                                <input
                                    className={`border-b-2 ${showError && 'shake-error'}`}
                                    placeholder="??????????????????"
                                    type="text"
                                    onChange={(e) => setCurrentTry(e.target.value)}
                                    onKeyDown={handlePressEnterButton}
                                />
                            }
                        </div>
                    </div>
                </div>
                <div className="flex w-2/6 p-16">
                    <img
                        className="h-[198px] w-[169px] animate-[wiggle_3s_ease-in-out_infinite]"
                        src="/logo/lucho.png" />
                </div>
            </div>
        </div>
    );
}

export default ChapterLeft;