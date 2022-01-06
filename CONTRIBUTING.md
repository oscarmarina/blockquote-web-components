## Contributing

### Pull Requests

We gladly accept community pull requests. In general across all of the elements, there are a few necessary steps before we can accept a pull request:

- Fork the repo.

- Code all you need to solve the issue.
- Ideally, squash your commits into a single commit with a clear message of what the PR does. If it absolutely makes sense to keep multiple commits, that's OK - or perhaps consider making two separate PR's.
- Include tests that test the range of behavior that changes with your PR. If you PR fixes a bug, make sure your tests capture that bug. If your PR adds new behavior, make sure that behavior is fully tested. Every PR must include associated tests.
- If you PR is a new feature, include a demo showing the new feature
- Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification to set the commit message.

If you've completed all of these steps the core team will do its best to respond to the PR as soon as possible.

### New Components

- Set the version to 1.0.0-rc.1 in package.json
- Commit it with message: "feat([component-name]): new component"
