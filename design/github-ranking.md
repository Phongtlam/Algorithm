Design a github ranking app. User can search through repos in an organization (through github API, 5000queries/hour per dev_key). User can browse repos for commits.
App live at: https://phongtlam.github.io/github-ranking-react/

## Functional Req:
- Can browse any organization by name
- Can click on a repo and view commits (30 newest)
- Need high consistency and availability (MySQL?) - but we might not need to actual save anything since it is only a viewer and not a git repo db

## Optional Req:
- Usage Metric

## Capacity:
- Each row of repo data - 10kb. About 100 repos/org 
- Each repo display top 30 commits - 10kb/commit
- Total 1500-2000kb > 2MB per organization
- Since we are not github itself, might not need to store the actual data but rather just utilize a cache (redis, memcache) to display data
- Read heavy

## API:
- getOrgRepos(organization_name, page);
- getCommitsByRepo(repo_id);

## Database Design - Cassandra
### repo (in redis/memcache):
- PK: github_repo_id(uuid), page
- organization_name (varchar10)
- commits (list<commit_ids>)
- creation_time (timestamp)
- stars_count (int)
- forks_count (int)
- language (varchar10)

### organization
- PK organization_name
- repo_ids(list<uuid>)

### commit (in redis/memcache):
- PK: commit_id
- content
- commit_message (string)
- parents (list<sha>)

### usage_metric:
- PK: time_uuid, repo_id
- num_clicks

## Basic Design
- client > web server > cache > github_API
- client hits web server (LB in between). Check redis cache for organization name, if not exist, query github API.
- Write through cache for higher throughput speed 
- Cache eviction policy (LRU cache) - evict un-used pages from an org. Statistically, we probably only save first 2 pages of an org at a time