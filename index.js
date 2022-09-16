import { createNewOrgRepos } from './src/RepoCreator.js';
import { requestSleep } from './src/Sleep';
// import { addIssueComment } from './src/AddIssueComment';

// Creates Repositories
createNewOrgRepos();

requestSleep(1500);

// TODO: Adds Comments WRT Created Repositories
// addIssueComment();