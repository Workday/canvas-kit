export interface SpecIt {
  type: 'it';
  name: string;
}

export interface SpecDescribe {
  type: 'describe';
  name: string;
  children: (SpecDescribe | SpecIt)[];
}

export interface SpecFile {
  type: 'file';
  name: string;
  children: (SpecDescribe | SpecIt)[];
}

// prettier-ignore
export const specifications: SpecFile[] = [/* SPEC_FILES_REPLACE_BY_WEBPACK */];
