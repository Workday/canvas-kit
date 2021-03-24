import React from "react";

export const GithubUrl = React.createContext('https://github.com/Workday/canvas-kit/');
export const GithubBranch = React.createContext('master')
export const StorybookUrl = React.createContext(typeof location !== 'undefined' && location.pathname === '/canvas-kit/' ? '/canvas-kit/' : '/');
