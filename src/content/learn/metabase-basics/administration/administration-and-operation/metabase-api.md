---


title: "Working with the Metabase API"
description: "An introduction to Metabase's API."
redirect_from:
  - /learn/metabase-basics/administration/administration-and-operation/metabase-api
  - /learn/administration/metabase-api
toc:
  - id: "working-with-the-metabase-api"
    title: "Working with the Metabase API"
    level: 1
    href: "#working-with-the-metabase-api"
  - id: "api-reference"
    title: "API reference"
    level: 2
    href: "#api-reference"
  - id: "warning-the-metabase-api-can-change"
    title: "Warning: the Metabase API can change"
    level: 2
    href: "#warning-the-metabase-api-can-change"
  - id: "getting-started-with-the-metabase-api"
    title: "Getting started with the Metabase API"
    level: 2
    href: "#getting-started-with-the-metabase-api"
  - id: "create-an-api-key"
    title: "Create an API key"
    level: 2
    href: "#create-an-api-key"
  - id: "example-get-request"
    title: "Example GET request"
    level: 2
    href: "#example-get-request"
  - id: "example-post-request"
    title: "Example POST request"
    level: 2
    href: "#example-post-request"
  - id: "see-metabase-s-requests-and-responses"
    title: "See Metabase’s requests and responses"
    level: 2
    href: "#see-metabase-s-requests-and-responses"
  - id: "experiment-in-live-api-docs"
    title: "Experiment in live API docs"
    level: 3
    href: "#experiment-in-live-api-docs"
  - id: "use-developer-tools"
    title: "Use developer tools"
    level: 3
    href: "#use-developer-tools"
  - id: "a-few-things-you-can-do-with-the-metabase-api"
    title: "A few things you can do with the Metabase API"
    level: 2
    href: "#a-few-things-you-can-do-with-the-metabase-api"
  - id: "provision-a-metabase-instance"
    title: "Provision a Metabase instance"
    level: 3
    href: "#provision-a-metabase-instance"
  - id: "add-a-data-source"
    title: "Add a data source"
    level: 3
    href: "#add-a-data-source"
  - id: "set-up-users-groups-and-permissions"
    title: "Set up users, groups, and permissions"
    level: 3
    href: "#set-up-users-groups-and-permissions"
  - id: "generate-reports"
    title: "Generate reports"
    level: 3
    href: "#generate-reports"
  - id: "useful-endpoints"
    title: "Useful endpoints"
    level: 2
    href: "#useful-endpoints"
  - id: "running-custom-queries"
    title: "Running Custom Queries"
    level: 2
    href: "#running-custom-queries"
  - id: "examples-in-python-r-and-javascript"
    title: "Examples in Python, R, and JavaScript"
    level: 2
    href: "#examples-in-python-r-and-javascript"
  - id: "python"
    title: "Python"
    level: 3
    href: "#python"
  - id: "r-with-the-tidyverse"
    title: "R with the Tidyverse"
    level: 3
    href: "#r-with-the-tidyverse"
  - id: "javascript-on-node-js"
    title: "JavaScript on Node.js"
    level: 3
    href: "#javascript-on-node-js"
  - id: "authenticate-your-requests-with-a-session-token"
    title: "Authenticate your requests with a session token"
    level: 2
    href: "#authenticate-your-requests-with-a-session-token"
  - id: "have-fun"
    title: "Have fun"
    level: 2
    href: "#have-fun"
breadcrumbs:
  - title: "Home"
    href: "../../../index.html"
  - title: "Administration"
    href: "../index.html"
  - title: "Administration and operation"
    href: "index.html"
---

# Working with the Metabase API

An introduction to Metabase's API.

This article explains how to automate tasks using [Metabase’s API](../../../../docs/latest/api.html). We use that API ourselves to connect the front end and the back end, so you can script almost everything that Metabase can do.

## API reference

You can find Metabase API reference [in our docs](../../../../docs/latest/api.html). You can also view live OpenAPI docs in your own running Metabase at `/api/docs`. So if your Metabase is at `https://www.your-metabase.com` you could access them at `https://www.your-metabase.com/api/docs`.

## Warning: the Metabase API can change

- **The API is subject to change** . We rarely change API endpoints, and almost never remove them, but if you write code that relies on the API, there’s a chance you might have to update your code in the future.
- **The API isn’t versioned** . So don’t expect to stay on a particular version of Metabase in order to use a “stable” API.

For API changes, check out the Developer guide’s [API changelog](../../../../docs/latest/developers-guide/api-changelog.html).

## Getting started with the Metabase API

To keep things simple, we’ll use the venerable command line utility [curl](https://curl.haxx.se/docs/) for our API call examples; you could also consider a dedicated tool for developing API requests \(like [Postman](https://www.postman.com/)\). To follow along, you can [spin up a fresh Metabase on localhost](../../../../start/oss/jar.html) and play around.

## Create an API key

To use the API, create an [API key](../../../../docs/latest/people-and-groups/api-keys.html).

## Example GET request

Here’s an example API request that hits the [`/api/permissions/group`](../../../../docs/latest/api.html#tag/apipermissions) endpoint, which returns the permission groups you have set up in your Metabase. Replace `YOUR_API_KEY` with your API key:

```
curl \
-H 'x-api-key: YOUR_API_KEY' \
-X GET 'http://localhost:3000/api/permissions/group'

```

The above request returns an array of JSON objects for the groups in your Metabase \(formatted for readability\):

```
[
  {
    "id": 2,
    "name": "Administrators",
    "member_count": 2
  },
  {
    "id": 1,
    "name": "All Users",
    "member_count": 3
  }
]

```

## Example POST request

You can also use a file to store the JSON payload for a POST request. This makes it easy to have a pre\-defined set of requests you want to make to the API.

```
curl -H @header_file.txt -d @payload.json http://localhost/api/card

```

Here’s the `header_file.text` in the above command:

```txt
x-api-key: YOUR_API_KEY

```

Here’s an example of a JSON file \(the `@payload.json` in the command above\) that creates a question:

```
{
  "visualization_settings": {
    "table.pivot_column": "QUANTITY",
    "table.cell_column": "SUBTOTAL"
  },
  "description value": "A card generated by the API",
  "collection_position": null,
  "result_metadata": null,
  "metadata_checksum": null,
  "collection_id": null,
  "name": "API-generated question",
  "dataset_query": {
    "database": 1,
    "query": {
      "source-table": 2
    },
    "type": "query"
  },
  "display": "table"
}

```

That request generated the question:

![A question in Metabase generated by the API: a list of the Orders table in the Sample Database](../../../images/metabase-api/api-generated-question.png)

## See Metabase’s requests and responses

### Experiment in live API docs

You can view live OpenAPI docs, served via [RapiDoc](https://rapidocweb.com/), from your running Metabase at `/api/docs`. So if your Metabase is at `https://www.your-metabase.com` you could access them at `https://www.your-metabase.com/api/docs`.

In live docs, you can experiment with sending requests and see example responses:

![Example of an API response in live docs](../../../images/metabase-api/live-docs.png)

### Use developer tools

If the auto\-generated API docs are unclear, you can use the developer tools that ship with browsers like Firefox, Chrome, and Edge to view Metabase’s requests and responses.

![Using Firefox](../../../images/metabase-api/firefox-network-json.png)

In the Metabase application, perform the action that you’d like to script, such as adding a user or creating a dashboard. Then use the developer tools in your browser to view the request Metabase made to the server when you performed that action.

## A few things you can do with the Metabase API

### Provision a Metabase instance

In addition to using [environment variables](../../../../docs/latest/configuring-metabase/environment-variables.html), you can use the Metabase API to setup an instance of Metabase. Once you have installed Metabase using your [preferred method](../../../../pricing/index.html), and the Metabase server is up and running, you can create the first user \(as an Admin\) by posting to a special endpoint, [/api/setup](../../../../docs/latest/api.html#tag/apisetup). This `/api/setup` endpoint:

- Creates the first user as an Admin \(superuser\).
- Logs them in.
- Returns a session ID.

You can then configure settings using the [`/api/settings`](../../../../docs/latest/api.html#tag/apisetting) endpoint, set up email using the [`/api/email`](../../../../docs/latest/api.html#tag/apiemail) endpoint, and use the [`/api/setup/admin_checklist`](../../../../docs/latest/api.html#tag/apisetup) endpoint to verify your setup progress.

![Admin checklist for setting up Metabase to make the most of your application.](../../../images/metabase-api/admin-checklist.png)

### Add a data source

You can add a new database using the [`POST /api/database/`](../../../../docs/latest/api.html#tag/apidatabase/post/api/database/) endpoint, and validate that database’s connection details using the [`/api/database/validate/`](../../../../docs/latest/api.html#tag/apidatabase/post/api/database/validate) endpoint. Once you’ve connected the database to your Metabase instance, you can rescan the database and update the schema metadata. You can even add our trusty [Sample Database](../../../../glossary/sample-database.html) as a new database to your instance with [`POST /api/database/sample_database`](../../../../docs/latest/api.html#tag/apidatabase/post/api/database/sample_database).

Here’s an example database creation call for a [Redshift](https://aws.amazon.com/redshift/) database.

```
curl -s -X POST \
    -H "Content-type: application/json" \
    -H 'x-api-key: YOUR_API_KEY' \
    http://localhost:3000/api/database \
    -d '{
        "engine": "redshift",
        "name": "Redshift",
        "details": {
            "host": "redshift.aws.com",
            "port": "5432",
            "db": "dev",
            "user": "root",
            "password": "password"
        }
    }'

```

### Set up users, groups, and permissions

You can use the [`/api/user`](../../../../docs/latest/api.html#tag/apiuser) endpoints to create, update, and disable users, or the [`/api/permissions`](../../../../docs/latest/api.html#tag/apipermissions) endpoints to set up groups or [add users to them](../../../../docs/latest/api.html#tag/apipermissions). Here’s an example curl command to create a user:

```
curl -s "http://localhost:3000/api/user" \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: YOUR_API_KEY' \
    -d '{
    "first_name":"Basic",
    "last_name":"Person",
    "email":"basic@somewhere.com",
    "password":"Sup3rS3cure_:}"
}'

```

### Generate reports

In Metabase, “reports” are referred to as [dashboards](../../../../docs/latest/dashboards/introduction.html). You can interact with dashboards using the [`/api/dashboard`](../../../../docs/latest/api.html#tag/apidashboard) endpoint. You can [create a new dashboard](../../../../docs/latest/dashboards/introduction.html#how-to-create-a-dashboard) with [`POST /api/dashboard/`](../../../../docs/latest/api.html#tag/apidashboard), and [add a saved question to a dashboard](../../../../docs/latest/dashboards/introduction.html#adding-or-saving-questions-to-a-dashboard) with \[`POST/api/dashboard/:id/cards`\].

## Useful endpoints

The links in the Endpoint column below will take you to you to the first action available for that endpoint, which alphabetically is usually the DELETE action. You can scroll down in the API documentation to see the full list of actions and URLs for that endpoint, and view descriptions of each.

| Domain | Description | Endpoint |
| --- | --- | --- |
| Collections | Collections are a great way to organize your dashboards, saved questions, and pulses. | /api/collection |
| Dashboards | Dashboards are reports that comprise a set of questions and text cards. | /api/dashboard |
| Databases | Fetch databases, fields, schemas, primary (entity) keys, lists of tables, and more. | /api/database |
| Email | Update emails settings and send test emails. | /api/email |
| Embedding | Use signed JWTs to fetch info on embedded cards and dashboards. | /api/embed |
| Permissions | Metabase manages permissions to databases and collections with groups. Create permission groups, add and remove users to groups, retrieve a graph of all permissions groups, and more. | /api/permissions |
| Search | Search cards (questions), dashboards, collections and pulses for a substring. | /api/search |
| Segments | Segments are named sets of filters (like “Active Users”). Create and update segments, revert to previous versions, and more. | /api/segment |
| Sessions | Reset passwords with tokens, login with Google Auth, send password reset emails, and more. | /api/sessions |
| Settings | Create/update global application settings. | /api/setting |
| Queries | Use the API to execute queries and return their results in a specified format. | /api/dataset |
| Questions | Questions (known as cards in the API) are queries and their visualized results. | /api/card |

There are some other cool endpoints to check out, like [`api/database/:virtual-db/metadata`](../../../../docs/latest/api.html#tag/apidatabase), which is used to “fool” the frontend so that it can treat saved questions as if they were tables in a virtual database. This is how Metabase lets you use Saved Questions as if they were data sources.

The documentation contains [a complete list of API endpoints](../../../../docs/latest/api.html) along with documentation for each endpoint, so dig around and see what other cool endpoints you can find.

The endpoint reference is periodically updated with new versions of Metabase. You can also generate the reference by running:

```
java -jar metabase.jar api

```

## Running Custom Queries

Queries written with the [query builder](../../../../docs/latest/questions/introduction.html) are saved in our custom JSON\-based query language, MBQL.

To familiarize yourself with MBQL, we recommend using the Metabase application to create a question using the [query builder](../../../../docs/latest/questions/introduction.html)\), then use your browser’s developer tools to see how Metabase formatted the request body with the query.

## Examples in Python, R, and JavaScript

Curl is a handy tool for exploring APIs, but if you’re integrating Metabase into a large data ecosystem, you will probably use something else. To show how you can access the API with Python, R, and Node.js, let’s create two questions. The first finds the average pre\-tax value of orders over $100 grouped by category. It is shared publicly—[this tutorial](../../embedding/charts-and-dashboards.html) explains how to do that.

![The notebook of a public question calculating the average value of orders over $100 by product category.](../../../images/metabase-api/public-question.png)

The second question counts the number of people in the database. It is *not* shared: we have included it to show how to distinguish shared from unshared questions.

![The notebook of a non-public question calculating the number of people in the database.](../../../images/metabase-api/non-public-question.png)

### Python

Our first example is written in Python. Like most data science programs it uses the [requests](https://pypi.org/project/requests/) library to send HTTP requests and [Pandas](https://pandas.pydata.org/) to manage tabular data, so we start by importing those libraries.

Let’s ask Metabase which questions have public IDs, i.e., which ones have been shared so that we can invoke them remotely. When we ask for all cards, we get a list with some information about all of the questions; only the ones with a `public_uuid` field are callable:

```
import requests
import pandas as pd
# Avoid committing your API KEY to the repository
headers = {'x-api-key': YOUR_API_KEY}
response = requests.get('http://localhost:3000/api/card',
                         headers=headers).json()
questions = [q for q in response if q['public_uuid']]
print(f'{len(questions)} public of {len(response)} questions')

```

In our case, the output tells us that there are two questions, but only one is public:

```
1 public of 2 questions

```

Let’s get some information about that public question and print its title:

```
uuid = questions[0]['public_uuid']
response = requests.get(f'http://localhost:3000/api/public/card/{uuid}',
                        headers=headers)
print(f'First title: {response.json()["name"]}')

```

```
First title: Average value of orders over $100 grouped by category

```

Finally, we can pull down data from the first question in the list. The `'data'` key in the JSON response has a lot of information; what we’re most interested in are the values under the sub\-key `'rows'`, which stores the result table in the usual list\-of\-lists form. Let’s convert that to a Pandas dataframe and print it:

```
response = requests.get(f'http://localhost:3000/api/public/card/{uuid}/query',
                        headers=headers)
rows = response.json()['data']['rows']
data = pd.DataFrame(rows, columns=['Category', 'Average'])
print('First data')
print(data)

```

```
First data
    Category     Average
0  Doohickey  114.679742
1     Gadget  123.530916
2      Gizmo  120.897286
3     Widget  122.078721

```

### R with the Tidyverse

The R version of our example has the same structure as the Python version. Like most data scientists we use the [tidyverse](https://www.tidyverse.org/) family of libraries, so let’s load those along with [`httr`](https://cran.r-project.org/web/packages/httr/) for managing HTTP requests, [`jsonlite`](https://cran.r-project.org/web/packages/jsonlite/) for parsing JSON, and [`glue`](https://cran.r-project.org/web/packages/glue/) for string formatting:

```
library(tidyverse)
library(httr)
library(jsonlite)
library(glue)

```

We put our API key in the headers.

```
headers <- add_headers('x-api-key' = YOUR_API_KEY)

```

We then get information about all of the questions and ask which ones are public:

```
data <- GET('http://localhost:3000/api/card', headers) %>%
  content(as = 'text', encoding = 'UTF-8') %>%
  fromJSON()
num_questions <- data %>%
  nrow()
num_public <- data %>%
  pull(public_uuid) %>%
  discard(is.na) %>%
  length()
glue('{num_public} public of {num_questions} questions')

```

```
1 public of 2 questions

```

Displaying the title of the first public card gives the same result as it did with Python, which is reassuring:

```
uuid <- data %>%
  pull(public_uuid) %>%
  discard(is.na) %>%
  first()
data <- glue('http://localhost:3000/api/public/card/{uuid}') %>%
  GET(headers) %>%
  content(as = 'text', encoding = 'UTF-8') %>%
  fromJSON()
glue('First title: {data$name}')

```

```
First title: Average value of orders over $100 grouped by category

```

And the data associated with that card is the same as well once we convert it to a tibble, though R’s default display doesn’t give us as many decimal places:

```
data <- glue('http://localhost:3000/api/public/card/{uuid}/query') %>%
  GET(headers) %>%
  content(as = 'text', encoding = 'UTF-8') %>%
  fromJSON()
rows <- data$data$rows
colnames(rows) <- c('Category', 'Average')
rows <- rows %>% as_tibble()
rows$Average <- as.numeric(rows$Average)
glue('First data')
rows

```

```
First data
# A tibble: 4 x 2
  Category  Average
  <chr>       <dbl>
1 Doohickey    115.
2 Gadget       124.
3 Gizmo        121.
4 Widget       122.

```

### JavaScript on Node.js

JavaScript is an increasingly popular language for server\-side scripting, but unlike Python and R, JavaScript lacks a single predominant library for data tables. For large projects we are fond of [`data-forge`](https://www.data-forge-js.com/), but for small examples we stick to [Dataframe\-js](https://gmousse.gitbooks.io/dataframe-js/). We also use [`got`](https://www.npmjs.com/package/got) for HTTP requests instead of the older [`request`](https://www.npmjs.com/package/request) package, as the latter has now been deprecated. Finally, since we find `async`/`await` syntax a lot easier to read than promises or callbacks, we put all of our code in an `async` function that we then call immediately:

```
const got = require("got");
const DataFrame = require("dataframe-js").DataFrame;

const main = async () => {
  // ...program goes here...
};

main();

```

Once again we start by authenticating ourselves:

```
headers = { "x-api-key": YOUR_API_KEY };

```

We then ask for the complete list of questions and filter them to select the public ones:

```
response = await got.get("http://localhost:3000/api/card", {
  responseType: "json",
  headers: headers,
});
// filter for public questions
questions = response.body.filter((q) => q.public_uuid);
console.log(`${questions.length} public of ${response.body.length} questions`);

```

```
1 public of 2 questions

```

The first public card still has the title we’ve seen before:

```
const uuid = questions[0].public_uuid;
response = await got.get(`http://localhost:3000/api/public/card/${uuid}`, {
  responseType: "json",
  headers: headers,
});
console.log(`First title: ${response.body.name}`);

```

```
First title: Average value of orders over $100 grouped by category

```

When we pull down its data we get the same values, though the numbers are shown in yet another slightly different way:

```
response = await got.get(
  `http://localhost:3000/api/public/card/${uuid}/query`,
  {
    responseType: "json",
    headers: headers,
  },
);
const rows = response.body.data.rows;
const df = new DataFrame(rows, ["Category", "Average"]);
df.show();

```

```
| Category  | Average   |
------------------------
| Doohickey | 114.67... |
| Gadget    | 123.53... |
| Gizmo     | 120.89... |
| Widget    | 122.07... |

```

## Authenticate your requests with a session token

> You should instead use an [API KEY](../../../../docs/latest/people-and-groups/api-keys.html). Including the info below just in case you need to use a session token for whatever reason.

You can also use a session token to authenticate your requests. To get a session token, submit a request to the [`/api/session`](../../../../docs/latest/api.html#tag/apisession) endpoint with your username and password:

```
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "person@metabase.com", "password": "fakepassword"}' \
  http://localhost:3000/api/session

```

If you’re working with a remote server, you’ll need replace `localhost:3000` with your server address. This request will return a JSON object with a key called `id` and the token as the key’s value, e.g.:

```
{ "id": "38f4939c-ad7f-4cbe-ae54-30946daf8593" }

```

You can then include that session token in the headers of your subsequent requests like this:

```
"X-Metabase-Session": "38f4939c-ad7f-4cbe-ae54-30946daf8593"

```

Some things to note about sessions:

- *By default, sessions are good for 14 days* . You can configure this session duration by setting the environment variable [`MB_SESSION_AGE`](../../../../docs/latest/configuring-metabase/environment-variables.html#max_session_age) \(value is in minutes\).
- *You should cache credentials* to reuse them until they expire, because logins are rate\-limited for security.
- *Invalid and expired session tokens return a 401 \(Unauthorized\) status code.*
- *Handle 401 status codes gracefully* . We recommend writing your code to fetch a new session token and automatically retry a request when the API returns a [401 status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) .
- *Some endpoints require that the user be an admin, also known as a superuser* . Endpoints that require admin or superuser status \(admin = superuser\) generally say so in their documentation. They will return a [403 \(Forbidden\) status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) if the current user is not an admin.

In short: use an [API key](../../../../docs/latest/people-and-groups/api-keys.html) instead.

## Have fun

If you have found this tutorial interesting, you can [spin up a local instance of Metabase](../../../../docs/latest/installation-and-operation/running-metabase-on-docker.html), experiment with the API, and have fun! If you get stuck, [check out our forum](https://discourse.metabase.com/) to see if anyone’s run into a similar issue, or post a new question.

[
      
        

      
      
        
        
      
    ](data-engineering.html)
