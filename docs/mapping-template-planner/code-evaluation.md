---
sidebar_position: 1
---

# Resolver Evaluation

This tool allows you to quickly build and test your VTL mapping templates or AppSync JavaScript Resolvers. At the moment, this is nothing else than a friendly GUI for the [evaluate-mapping-template](https://docs.aws.amazon.com/cli/latest/reference/appsync/evaluate-mapping-template.html) and [evaluate-code](https://docs.aws.amazon.com/cli/latest/reference/appsync/evaluate-code.html) aws cli commands.

:::info
There are plans to allow executing the resulting JSON object against real data sources. See the [roadmap](https://github.com/orgs/graphboltdev/projects/1/views/1?filterQuery=mapping&pane=issue&itemId=11954302).
:::


![Mapping template evaluation](./img/evaluation.png)

## 1. Context Object

The top section is where you can enter the data that will be used as the `context` to evaluate the mapping template. It is split into several tabs where each tab is one field of the [context object](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference-js.html).

All values should be represented as a JSON object.


## 2. Mapping Template/JS Resolver

This is where you can write your VTL mapping template, or JavaScript resolver code. 
Select the runtime you want to use from the dropdown, and write or paste your resolver in the code editor below. 


After clicking the `Eval` button, the result will show in the right section.

:::info
For JS resolvers, you will also be prompted to select the function to evaluate (i.e. `request()` or `response()`)
:::

## 3. Result

This is where the result of the evaluation is shown.

## Keyboard Shortcuts

| Combination | Action |
| -- | -- |
| `Cmd/Ctrl + R`<br/>`Cmd/Ctrl + Enter` | Execute the request |
