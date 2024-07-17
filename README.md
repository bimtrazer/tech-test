## Full-Stack Development Test

Let's create a CRUD app using the following technologies:

- **Frontend**, use React, Angular, Astro, or any other frontend framework/library. D'you want to try vanilla JS? that's fine too.
- **API** RESTful documented with [Swagger](https://swagger.io/).
- **Backend**, a microservice written in Node.js, Go, or Python. It doesn't matter the language or framework.
- **Database** MongoDB.

### Context

A `block` is a piece of work that has some data associated with it. A block's _value_ determines how much progress has been made on. When it is completed, its value is 100.

**Fun fact**: blocks are a real structure used in Bimtrazer, although real ones aren't as fun as these. (tons of data on 'em)

### Requirements

#### **Data Structure**

The entity should have the following fields:

```TypeScript
type Block = {
  id: string;
  description: string;
  startDate: string;
  endDate: string;
  value: number;
};
```

We give you a sample here:

```json
{
  "id": "6671997cfcac3e0bfbe8607c",
  "description": "SUPER FANCY STAIRS",
  "startDate": "2024-06-03T00:00:00",
  "endDate": "2024-06-03T23:59:59",
  "value": 75
}
```

#### **Frontend**

Through this app, the user should be able to create, read, update, and delete a `Block` entity.

#### **API**

Include the following endpoints:

- `POST /blocks` Creates a new block.
- `GET /blocks` Returns all blocks.
- `PUT /blocks/:id` Updates a block.
- `DELETE /blocks/:id` Deletes a block.

Have to be documented with Swagger.

##### What's Swagger?

A bunch of tools for designing APIs. You'll need to document your API using the OpenAPI Specification (OAS).

**Useful links**:

- [Basic Structure](https://swagger.io/docs/specification/basic-structure/) helps you understand how to describe your API using the OAS.
- [Swagger Editor](https://editor.swagger.io/) online tool to apply what you've learned about the OAS. After writing your own docs, try out your endpoints by sending requests to them.

Also, you must accept an `Authorization` header with a `Bearer` token. If a request isn't authenticated then backends cannot be hit.

#### **Backend**

- Description max length: 40 characters.
- Description is unique among all blocks.
- Description cannot be updated, once it's set it turns immutable.
- Start date cannot be greater than end date.
- End date cannot be smaller than start date.
- Value is a number between 0 and 100 (inclusive).
- Value cannot be updated with a smaller value than the current one.

#### **Architecture**

_Watch out!_ Note that the API and the backend are two different things. The first one is the interface that the frontend will consume along with the token validation. The second one is the business logic that will be used by the API. Frontend <u>can't</u> access the backend directly.

![Architecture Schema](/assets/architecture-schema.png)

### Evaluation Criteria

Focus on your preferred role. If you're into frontend, user experience and UI should be your best. But if you're a backend person make sure your code is clean and scalable. Stick to best practices for your area.

### How to solve this test

Fork this repository and create a new branch with your solution. Once you're done, open a pull request right here :)

✨ Have fun & keep baking yummy blocks! ✨
