import { ContentFolder, ContentsViewType, ContentType, CustomScript, DraftField, Framework, SortingOption, SortingSetting, VersionInfo } from '.';

export interface Settings { 
  beta: boolean;
  initialized: boolean;
  wsFolder: string; 
  staticFolder: string; 
  folders: ContentFolder[]; 
  tags: string[];
  categories: string[];
  openOnStart: boolean | null;
  versionInfo: VersionInfo;
  pageViewType: ContentsViewType | undefined;
  mediaSnippet: string[];
  contentTypes: ContentType[];
  contentFolders: ContentFolder[];
  crntFramework: string;
  framework: Framework | null | undefined;
  draftField: DraftField | null | undefined;
  customSorting: SortingSetting[] | undefined;
  dashboardState: DashboardState;
  scripts: CustomScript[];
}

export interface DashboardState {
  contents: ViewState;
  media: ViewState;
}

export interface ViewState {
  sorting: SortingOption | null | undefined;
  defaultSorting: string | null | undefined;
}