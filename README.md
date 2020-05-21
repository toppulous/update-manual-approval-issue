# update-manual-approval-issue
![.github/workflows/integration.yml](https://github.com/toppulous/update-manual-approval-issue/workflows/.github/workflows/integration.yml/badge.svg)

GitHub action to update manual approval issue with new changes information

This aciton is meant to be used in conjunction with toppulous/create-manual-approval-issue. Plug the
return value from that action into this one to update what changes are waiting for approval in your
stage.

## Inputs
### issue-number
**Required** the number of the issue to update with change information
### tag
**Required** a tag/key to indiciate the change that has most recently been applied, `github.sha` is
a good value for this
### keyword
*Optional* this value will be prefixed to updates to the manual approval issue, to be used to
provide context that this update is a part of the workflow

