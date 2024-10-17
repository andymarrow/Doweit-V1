"use client";
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schemaCourse';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import ChapterListCard from './_components/ChapterListCard';
import ChapterContent from './_components/ChapterContent';
import Header from '@/app/_components/Header'

function CourseStart({ params }) {
    const [course, setCourse] = useState();
    const [selectedChapter, setSelectedChapter] = useState();
    const [ChapterContents,setChapterContents]=useState();

    useEffect(() => {
        GetCourse();
    }, []);

    const GetCourse = async () => {
        const result = await db.select().from(CourseList)
            .where(eq(CourseList?.courseId, params?.courseId));
        console.log(result);
        setCourse(result[0]);
        GetSelectedChapterContent(0)
    };

    const GetSelectedChapterContent=async(chapterId)=>{
        const result=await db.select().from(Chapters)
        .where(and(eq(Chapters.chapterId,chapterId),
        eq(Chapters.courseId,course?.courseId)));
        setChapterContents(result[0]);
        console.log(result)
    }

    return (
        <div>
           
            <Header/>
            
           
            <div className="flex">
            {/* Chapter List Sidebar */}
            <div className='hidden md:block md:w-64 h-screen border-r shadow-md bg-white'>
                <h2 className="font-medium text-center text-lg bg-primary p-3 text-white">
                    {course?.courseOutput?.course?.name}
                </h2>
                <div className="p-3">
                    {course?.courseOutput?.course?.chapters.map((chapter, index) => (
                        <div key={index}
                            className={`flex items-center p-2 rounded-lg cursor-pointer 
                            ${selectedChapter === chapter ? 'bg-purple-200' : 'hover:bg-purple-50'}`}
                            onClick={() => {setSelectedChapter(chapter);
                                GetSelectedChapterContent(index)
                            }}
                        >
                            <ChapterListCard chapter={chapter} index={index} />
                            {selectedChapter === chapter && (
                                <div className="ml-2 w-2 h-2 bg-purple-600 rounded-full"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Side */}
            <div className="">
                    <ChapterContent chapter={selectedChapter} content={ChapterContents}/>
            </div>
        </div>
         </div>
     
    );
}

export default CourseStart;