export type ThemeTypes = 'dark' | 'light';

export type SortedPostsDataType = {
  id: string;
  title: string;
  date: string;
}[];

export type PostDataType = {
  title: string;
  date: string;
  content: string;
};

export type MarkdownProps = {
  content: string;
};
