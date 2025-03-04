import * as React from 'react';
import { isValidFile } from '../../helpers/isValidFile';
import { MessageHelper } from '../../helpers/MessageHelper';
import { CommandToCode } from '../CommandToCode';
import { FileIcon } from './Icons/FileIcon';
import { MarkdownIcon } from './Icons/MarkdownIcon';

export interface IFileItemProps {
  name: string;
  path: string;
}

const FileItem: React.FunctionComponent<IFileItemProps> = ({ name, path }: React.PropsWithChildren<IFileItemProps>) => {
  
  const openFile = () => {
    MessageHelper.sendMessage(CommandToCode.openInEditor, path);
  };

  return (
    <li className={`file_list__items__item`}
        onClick={openFile}>
      {
        (isValidFile(name)) ? (
          <MarkdownIcon />
        ) : (
          <FileIcon />
        )
      }

      <span>{name}</span>
    </li>
  );
};

FileItem.displayName = 'FileItem';
export { FileItem };