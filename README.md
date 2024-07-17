## Full-Stack Development Test

Let's create a CRUD app using the following technologies:

- **Frontend**: Use React, Angular, Astro, or any other frontend framework/library. D'you want to use vanilla JS? that's fine too.
- **API**: RESTful API documented with Swagger.
- **Backend**: A microservice written in Node.js, Go, or Python. It doesn't matter the language or framework you use.
- **Database**: MongoDB.

### Context

A `block` is a piece of work that has some data associated with it. A block's _value_ determines how much progress has been made on. When it is completed, its value is 100.

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

Have to be documented with Swagger (use this tool locally).

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

![Architecture Schema](/assets/architecture-schema.png)

### Evaluation Criteria

Focus on your preferred role. If you're into frontend, user experience and UI should be your best. But if you're a backend person make sure your code is clean and scalable. Stick to best practices for your area.

### How to solve this test

Fork this repository and create a new branch with your solution. Once you're done, open a pull request right here :)

✨ Have fun & keep baking good blocks! ✨
