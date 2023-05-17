---
sidebar_position: 2
---

# Query Details

This section gives you detailed information of what happened under the hood when a specific query was executed. It allows you to quickly find problems and work on improving your APIs performance.

![Query Details](img/query-details.png)

In the top section, you will find general information about the selected request:

| Field | Description |
| -- | -- |
| Api |  The API id this query belongs to.
| Operation name |  The name of the operation that was executed, or the name of the first query/mutation in the request. |
| Duration |  How long this query took. |
| Latency | The latency of the request. |
| Start and end times |  The start and end time of the request. |

Below, you will find a series of tabs that give deeper information.

# Resolvers

This is a list of all the fields that were resolved by a resolver. They are presented hierarchically, respecting their parent/child relationship.

![Resolvers](img/resolvers.png)

This section gives you additional information about each field/resolver:

| Column | Description |
| ---  | --- | 
| Path|  The full path of the resolved field in the query. |
| Resolver| The parent type and field name of the executed resolver. Next to it you'll see what kind of resolver it is (i.e. `Unit` or `Pipeline`), and icon (or icons) representing the underlying data source(s) that were used to resolve this field. |
| Start offset| The difference in time between the beginning of this resolver invocation and the start of the request.|
| Duration| How long this invocation of the resolver lasted.|
| eye / 👁 | Click to see [resolver details](./resolver-details) |

# X-Ray

Quickly see X-Ray traces for the selected query. This includes:

- Resolver mapping templates
- DynamoDB data sources
- Lambda resolvers
- HTTP resolver requests 
- etc

![X-Ray](img/x-ray.png)

:::caution
For this feature to work, [x-ray traces](https://docs.aws.amazon.com/appsync/latest/devguide/x-ray-tracing.html) must be enabled on the API. 
:::

# Query

This tab shows the query that was executed along with the input variables (if any).

![Query](img/query.png)

# Request and Response Headers

A list of all the HTTP request or response headers of the HTTP request.

![Headers](img/headers.png)

# CloudWatch Logs
This includes all the logs related to this query as seen in AWS CloudWatch.

![Raw logs](img/raw-logs.png)
