"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';
import Logo from './components/Logo/Logo';
import data from './data.json';
import ChapterLeft from './components/ChapterLeft/ChapterLeft';
import ChapterRight from './components/ChapterRight/ChapterRight';
import Footer from './components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  const [wordList, setWordList] = useState<string[]>([]);
  const [chapterList, setChapterList] = useState<any>(data.chapters);

  useEffect(() => {
    const currentWordList = JSON.parse(localStorage.getItem('wordList') || '[]');
    if (currentWordList && currentWordList.length > 0) {
      setWordList(currentWordList);
    }
  }, [])

  function isEven(number: number): boolean {
    return number % 2 === 0;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 w-full items-center justify-center font-mono text-sm flex flex-col">
        <div className="z-10 w-full items-center justify-center flex xl:flex-row lg:flex-row md:flex-row sm:flex-col">
          <div className="xl:hidden lg:hidden md:hidden sm:inline sm:w-full">
            <div className="flex flex-row">
              <h1 className="w-1/2 flex content-center justify-center text-5xl mb-10">{wordList.length || '0'}/10</h1>
              <div className="w-1/2 flex content-center justify-center">

              </div>
            </div>
          </div>
          <div className="xl:w-1/6 lg:w-1/6 md:w-1/6 xl:inline lg:inline md:inline sm:hidden">
            <div className="absolute top-20 left-20">
              <h1 className="text-5xl">{wordList.length || '0'}/10</h1>
            </div>
          </div>
          <div className="xl:w-4/6 lg:w-4/6 md:w-4/6 sm:w-full">
            <Logo />
          </div>
          <div className="xl:w-1/6 lg:w-1/6 md:w-1/6 xl:inline lg:inline md:inline sm:hidden">
            <div className="absolute top-20 right-20">

            </div>
          </div>
        </div>
        {true &&
          <div className="items-center justify-center flex flex-col mt-8 max-w-screen">
            {
              chapterList && chapterList.map((chapter: any, index: number) => (
                isEven(index) ?
                  <ChapterLeft
                    key={'chapter_' + index}
                    id={chapter.id}
                    name={chapter.name}
                    url={chapter.video_url}
                    haveWord={chapter.have_word}
                    word={chapter.word}
                    setWordList={setWordList}
                    wordList={wordList}
                  />
                  :
                  <ChapterRight
                    key={'chapter_' + index}
                    id={chapter.id}
                    name={chapter.name}
                    url={chapter.video_url}
                    haveWord={chapter.have_word}
                    word={chapter.word}
                    setWordList={setWordList}
                    wordList={wordList}
                  />
              ))
            }
          </div>
        }
      </div>
      <Footer />
      <Analytics />
    </main>
  )
}
