import { writeFileSync } from 'node:fs';

const issueNumber = process.env.ISSUE_NUMBER;
const repository = process.env.GITHUB_REPOSITORY;

if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not set.');
}

if (!issueNumber) {
  throw new Error('ISSUE_NUMBER is not set.');
}

const summary = `OpenAI automation has started processing issue #${issueNumber} in ${repository}.\n\nThis starter workflow confirms that the issue was detected and that OPENAI_API_KEY is configured successfully.\n\nNext step: extend this script to call the OpenAI API, analyze the issue, and propose or implement changes.`;

console.log(summary);
writeFileSync('openai-agent-output.txt', summary);
