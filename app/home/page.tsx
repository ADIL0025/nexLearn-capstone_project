"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { ModeToggle } from '@/components/ModeToggle';
import Searchbar from '@/components/Searchbar';
import { Button } from '@/components/ui/button';
import Username from '@/components/Username';
import { Bell } from 'lucide-react';
import DashboardGrid from '@/components/custom/dashboard/dashboard-grid';
import CourseView from '@/components/custom/course/course-view';
import Library from '@/components/custom/library/library-view';
import CodePage from '@/components/custom/code/code-view';
import PracticeSection from '@/components/custom/practice/practice-section';
import NotificationSection from '@/components/custom/notification/notification-section';
import SettingsSection from '@/components/custom/settings/settings-section';

const HomePage = () => {
  
  const router = useRouter();
  const [selectedGroup, setSelectedGroup] = useState('Dashboard');

  useEffect(() => {
    const checkAuth = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                router.push('/login');
                return;
            }
        } catch (error) {
            console.error('Error finding authorisation token: ', error);
        }
    }

    checkAuth();
}, []);

  const renderComponent = () => {
    switch (selectedGroup) {
      case 'Dashboard':
        return <DashboardGrid />;
      case 'Library':
        return <Library />;
      case 'My Courses':
        return <CourseView />;
      case 'Code':
        return <CodePage />;
      case 'Practice':
        return <PracticeSection />;
      case 'Messages':
        return <NotificationSection />;
      case 'Settings':
        return <SettingsSection />;
      default:
        return <div>Other component</div>;
    }
  }

  return (
    <div className='relative h-screen w-screen flex'>
      <RightNav />
      <Sidebar selectedGroup={selectedGroup} onSelectGroup={setSelectedGroup}/>
      <div className='px-6 py-8 flex flex-col'>
        <div className='text-2xl font-semibold mb-8'>
          {selectedGroup}
        </div>
        {renderComponent()}
      </div>
    </div>
  )
}

export default HomePage

const RightNav = () => {
  return (
    <div className='absolute top-6 right-6'>
        <div className='flex justify-evenly gap-x-8 items-center'>
          {/* <Searchbar /> */}
          <Button size={'icon'} variant={'outline'}>
            <Bell className='w-5 h-5'/>
          </Button>
          <Username />
          <ModeToggle />
        </div>
      </div>
  )
}