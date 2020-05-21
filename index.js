const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  const issue_number = core.getInput('issue-number');
  const token = core.getInput('github-token');
  const tag = core.getInput('tag');
  const keyword = core.getInput('keyword');

  core.info(`Updating issue ${issue_number}...`);

  const octokit = new github.GitHub(token);

  octokit.issues.createComment({
    issue_number: issue_number,
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    body: `${keyword}\ntag:${tag}`
  });
}

core.info('starting...');
run();
