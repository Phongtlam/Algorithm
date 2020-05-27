Design Curated Feed: Design a curated feed to display cards tagged by merchants and PMs. Ingestion can be done at off hours (once a day).
website at: https://www.walmart.com/home/decorating-ideas?

## Functional Reqs:
- Display a list of cards tagged by marketers
- User should be able to filter cards by some attributes
- Getting new cards daily
- Need to update once every 24 hours
- Cards never expire unless removed
Extras: telemetry

## Capacity:
- start out with 200 cards
- 20 new cards a day
- 10kb/card > 200 kb/day > 100GB / year
- Images on the card can be store on a file storage system (S3)

## Traffic estimate:
- 100 req/second displaying 40 cards at a time > 40000 kb/second
- Read heavy - cache 20% of total cards > 20GB/year 

## APIs
- get(attributes_values(object), page(string))
- insert(card_id(uuid), attributes_values, creation_time)
- delete(card_id(uuid))

## Database Design - Cassandra
### card:
- PK: card_id (uuid)
- creation_time (datetime)
- content (varchar)
- data_source (varchar16)

### attribute_values:
- PK: (attribute, value) as composite keys, card_id
- data_source (varchar16)
- creation_time

### usage_metric:
- PK: time_uuid, card_id
- num_clicks

Cassandra DB due to high availability and partition tolerance

## Basic Design
client > web server > cache (LRU) > DB

- Client hit Web server
- WS looks in cache, if data found, return immediately. Cache generally holds first page, no filters applied plus others in LRU cache fashion
- If data does not exist in cache, look in DB. Do write through cache mechanism (write to cache and respond to client at the same time for speed)
- Potential bottlenecks are in client > ws (LB) and ws > cache (LB)
- Usage metric: have a deamon that inputs usage metric on an interval, or when task queue on a separate task queue, can be on a different server to decrease stress on main WS.
- Data ingestion is done off hour, utilize 1 of the web servers in the cluster to ingest. To make sure they do not do the task twice, use a messaging Q (rabbitMQ) to dictate who is going to do the ingestion. Round robin since it is night time and traffic should be low, no worry about bottle neck.
