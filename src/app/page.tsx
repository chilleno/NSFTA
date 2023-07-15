"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';
import Logo from './components/Logo/Logo';
import data from './data.json';
import ChapterLeft from './components/ChapterLeft/ChapterLeft';
import ChapterRight from './components/ChapterRight/ChapterRight';

export default function Home() {
  const [wordList, setWordList] = useState<string[]>([]);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [chapterList, setChapterList] = useState<any>(data.chapters);
  let audio: HTMLAudioElement | null = null;


  useEffect(() => {
    const currentWordList = JSON.parse(localStorage.getItem('wordList') || '[]');
    if (currentWordList && currentWordList.length > 0) {
      setWordList(currentWordList);
    }
  }, [wordList])

  useEffect(() => {
    if (audioEnabled) {
      audio = new Audio('/music/loop_song_long.wav');
      audio.loop = true;
      audio.volume = audioEnabled ? 0.2 : 0;
      audio.muted = !audioEnabled;

      audio.play();
    }

    return () => {
      audio && audio.pause();
      audio = null;
    };
  }, [audioEnabled]);

  const toggleAudio = () => {
    setAudioEnabled(prevState => !prevState);
  };

  function isEven(number: number): boolean {
    return number % 2 === 0;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 w-full items-center justify-center font-mono text-sm flex flex-col">
        <div className="z-10 w-full items-center justify-center flex">
          <div className="w-1/6">
            <div className="absolute top-20 left-20">
              <h1 className="text-5xl">{wordList.length || '0'}/10</h1>
            </div>
          </div>
          <div className="w-4/6">
            <Logo />
          </div>
          <div className="w-1/6">
            <div className="absolute top-20 right-20">
              {
                audioEnabled ?
                  <>
                    <SpeakerWaveIcon
                      onClick={toggleAudio}
                      className="h-10 w-10 text-blue-500 hover:cursor-pointer"
                    />
                  </>
                  :
                  <SpeakerXMarkIcon
                    onClick={toggleAudio}
                    className="h-10 w-10 text-blue-500 hover:cursor-pointer"
                  />
              }
            </div>
          </div>
        </div>
        <div className="z-10 w-full items-center justify-center flex flex-col mt-32">
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
                />
            ))
          }
        </div>
      </div>
    </main>
  )
}
