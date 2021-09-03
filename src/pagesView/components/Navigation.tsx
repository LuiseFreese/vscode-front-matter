import * as React from 'react';
import { useRecoilState } from 'recoil';
import { Tab } from '../constants/Tab';
import { TabAtom } from '../state';

export interface INavigationProps {
  totalPages: number;
}

export const tabs = [
  { name: 'All articles', id: Tab.All},
  { name: 'Published', id: Tab.Published },
  { name: 'In draft', id: Tab.Draft }
];

export const Navigation: React.FunctionComponent<INavigationProps> = ({totalPages}: React.PropsWithChildren<INavigationProps>) => {
  const [ crntTab, setCrntTab ] = useRecoilState(TabAtom);

  return (
    <nav className="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`${tab.id === crntTab ? `border-teal-900 dark:border-teal-300 text-teal-900 dark:text-teal-300` : `border-transparent text-gray-500 dark:text-whisper-600 hover:text-gray-700 dark:hover:text-whisper-700 hover:border-gray-300 dark:hover:border-whisper-500`} whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm`}
          aria-current={tab.id === crntTab ? 'page' : undefined}
          onClick={() => setCrntTab(tab.id)}
        >
          {tab.name}{(tab.id === crntTab && totalPages) ? ` (${totalPages})` : ''}
        </button>
      ))}
    </nav>
  );
};