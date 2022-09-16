// TODO: WIP

import { issueCommentsList } from "./IssueConstants";

const postIssueComments = async (issueComments) => {
    try{
        await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', issueComments)
    } catch(e){
        console.log(`❌ - Oops! Couldn't Post Issue Comment For ${issueComments.issue_number}. Please try again!`)
    }
}

export const addIssueComment = async () =>{
    issueCommentsList.forEach(issues => postIssueComments(issues));
}

