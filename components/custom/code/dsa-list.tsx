"use client"

import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

interface Section {
    title: string;
    total: number;
    solved: number;
    problems: {
      name: string;
      difficulty: 'Easy' | 'Medium' | 'Hard';
      link: string;
    }[];
}

const dropdownSections: Section[] = [
    {
      title: 'Arrays & Hashing',
      total: 9,
      solved: 0,
      problems: [
        { name: 'Contains Duplicate', difficulty: 'Easy', link: '#' },
        { name: 'Valid Anagram', difficulty: 'Easy', link: '#' },
        { name: 'Two Sum', difficulty: 'Easy', link: '#' },
        { name: 'Group Anagrams', difficulty: 'Medium', link: '#' },
        { name: 'Top K Frequent Elements', difficulty: 'Medium', link: '#' },
        { name: 'Encode and Decode Strings', difficulty: 'Medium', link: '#' },
        { name: 'Product of Array Except Self', difficulty: 'Medium', link: '#' },
        { name: 'Valid Sudoku', difficulty: 'Medium', link: '#' },
        { name: 'Longest Consecutive Sequence', difficulty: 'Medium', link: '#' },
      ],
    },
    { title: 'Two Pointers', total: 5, solved: 0, problems: [] },
    { title: 'Sliding Window', total: 6, solved: 0, problems: [] },
    { title: 'Stack', total: 7, solved: 0, problems: [] },
    { title: 'Binary Search', total: 7, solved: 0, problems: [] },
    { title: 'Linked List', total: 11, solved: 0, problems: [] },
];

const DSAList = () => {
    const [expanded, setExpanded] = useState<string | null>(null);
    
    const toggleExpand = (title: string) => {
        setExpanded(expanded === title ? null : title);
    };

  return (
    <div className='col-span-2 p-4 rounded-md'>
        {dropdownSections.map((section) => (
          <div key={section.title} className='mb-4'>
            <div
              className='flex justify-between items-center p-4 bg-slate-300 dark:bg-gray-700 rounded-md cursor-pointer'
              onClick={() => toggleExpand(section.title)}
            >
              <span className='font-semibold text-black dark:text-white'>{section.title}</span>
              <div className='flex items-center gap-x-2 text-gray-600 dark:text-gray-400'>
                <span>
                  {section.solved} / {section.total}
                </span>
                <div className={`transition-transform ${expanded === section.title ? 'rotate-180' : ''}`}>
                  <ChevronDown className='h-5'/>
                </div>
              </div>
            </div>
            {expanded === section.title && (
              <div className='mt-2 bg-slate-300 dark:bg-gray-700 rounded-md p-4'>
                <div className='h-2 bg-gray-100 dark:bg-gray-500 rounded-md mb-4 relative'>
                  <div
                    className='h-full bg-green-500 rounded-md'
                    style={{
                      width: `${(section.solved / section.total) * 100}%`,
                    }}
                  ></div>
                </div>
                {section.problems.length > 0 ? (
                  <ul className='space-y-2'>
                    {section.problems.map((problem) => (
                      <li key={problem.name} className='flex justify-between items-center'>
                        <a href={problem.link} target='_blank' rel='noopener noreferrer' className='text-black dark:text-[#e1e1e1] hover:underline'>
                          {problem.name}
                        </a>
                        <span
                          className={`px-4 py-2 text-sm rounded bg-[#121417] ${
                            problem.difficulty === 'Easy'
                              ? 'text-green-500'
                              : problem.difficulty === 'Medium'
                              ? 'text-blue-500'
                              : 'text-red-500'
                          }`}
                        >
                          {problem.difficulty}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className='text-gray-400'>No problems available yet.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
  )
}

export default DSAList