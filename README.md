## Full-Stack Development Test

Let's create a CRUD app using the following technologies:

- Frontend: Use React, Angular, Astro or any other frontend framework/libary. D'you want to use vanilla JS? that's fine too.
- API: RESTful API documented with Swagger.
- Backend: A microservice written in Node.js, Go, or Python. It doesn't matter the language or framework you use.
- Database: MongoDB.

### Requirements

**Data Structure**

A `Block` entity should have the following fields:

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
  "value": 100
}
```

**Frontend**

Through this app, the user should be able to create, read, update, and delete a `Block` entity.

**API**

Include the following endpoints:

- `POST /blocks`: Creates a new block.
- `GET /blocks`: Returns all blocks.
- `PUT /blocks/:id`: Updates a block.
- `DELETE /blocks/:id`: Deletes a block.

Have to be documented with Swagger (use this tool locally).

Also, you must accept a `Authorization` header with a `Bearer` token. If a request isn't authenticated then backends cannot be hit.

**Backend**

- Description max length: 40 characters.
- Start date cannot be greater than end date (both dates are inclusive).
- Value is a number between 0 and 100 (inclusive).

### Evaluation Criteria

Focus on your preferred role. If you're into frontend, user experience and UI have to be your best. But if you're a backend person, make sure your code is clean and scalable. Stick to best practices for your area.
