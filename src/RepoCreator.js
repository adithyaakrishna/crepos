import { Octokit } from "@octokit/core";
import { newReposList } from './RepoConstants.js';
import { requestSleep } from './Sleep.js';

// Organization name
export const organizationName = 'rh-impact';

// Repository name
export const repositoryName = 'pnt-hackathon-2022';

// Repository Owner/Contact Name
export const orgContactPerson = '@computate';

// Initializes Octokit with GitHub Personal Access Token
const octokit = new Octokit({
    auth: '<YOUR_AUTH_TOKEN>'
})

// Post request to create repositories for the organization
const newRepoRequest = async (repos) => {
    try {
        await octokit.request(`POST /orgs/{org}/repos`, repos)
        requestSleep(1000);
    } catch (e) {
        // To log error if any post request fails
        console.log(`❌ - Oops! Couldn't Create Repository For ${repos.name}. Please try again!`);
    }
}

// To map through each object and create a repo for it
export const createNewOrgRepos = async () => {
    newReposList.forEach(repos => newRepoRequest(repos));
    console.log('✅ - Successfully Created Repositories')
    requestSleep(1000);
    try {
        const organizatinReposList = await octokit.request('GET /orgs/{org}/repos', {
            org: organizationName
        })

        console.log(`Here are the Repositores which ${organizationName} has - 👇🏻`)
        console.table(organizatinReposList);
    } catch (e) {
        // To log error if the get request fails
        console.log(`❌ - Oops! Couldn't List Repositories. Please try again!`)
    }
}