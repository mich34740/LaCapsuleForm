const express = require('express');
const router = express.Router();
const Joi = require('joi');

const postSchema = Joi.object({
  userId: Joi.number().min(1).required(),
  id: Joi.number().min(1).required(),
  title: Joi.string().min(1).required(),
  body: Joi.string().min(1).required()
});

const postsArraySchema = Joi.array().items(postSchema);

const commentSchema = Joi.object({
  postId: Joi.number().required(),
  id: Joi.number().required(),
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  body: Joi.string().min(1).required()
});
const commentsArraySchema = Joi.array().items(commentSchema);

const complexcommentSchema = Joi.object({
  postId: Joi.number().required(),
  id: Joi.number().required(),
  name: Joi.string().min(1).required(),
  email: Joi.string().email().regex(/@example\.com$/).required(),
  body: Joi.string().min(1).regex(/^(?!.*(spam|hack|badword|fake)).*$/i).required()
});
const complexcommentsArraySchema = Joi.array().items(complexcommentSchema);

const photoSchema = Joi.object({
  albumId: Joi.number().required(),
  id: Joi.number().required(),
  title: Joi.string().min(1).required(),
  url: Joi.string().uri().required(),
  thumbnailUrl: Joi.string().uri().required()
});
const photosArraySchema = Joi.array().items(photoSchema);

const tacheSchema = Joi.object({
  userId: Joi.number().required(),
  id: Joi.number().required(),
  title: Joi.string().min(1).required(),
  completed: Joi.boolean().required()  
});
const tachesArraySchema = Joi.array().items(tacheSchema);


/* GET home page. */
router.get('/api/posts/:id', function(req, res, next) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
  .then(res => res.json())
  .then(data => {
    const { error, value } = postSchema.validate(data);
    if (error) {
        return res.status(400).json({
          result: false,
          error: error.details[0].message
        });
    }
   
    return res.status(200).json({
       result: true,
       post: data,
    });
})
.catch(err => {
      res.status(500).json({
        result: false,
        error: "API error"
      });
    });
});

router.get('/api/posts/:id/comments', function(req, res, next) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments`)
  .then(res => res.json())
  .then(data => {
    
    const { error, value } = commentsArraySchema.validate(data);
    if (error) {
      return res.status(400).json({
      result: false,
      error: error.details[0].message
        });
    }

    return res.status(200).json({
       result: true,
       post: data,
    });
})
.catch(err => {
      res.status(500).json({
        result: false,
        error: "API error"
      });
    });
});


router.get('/api/validate-posts', function(req, res, next) {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(res => res.json())
  .then(data => {
    const { error, value } = postsArraySchema.validate(data);
    if (error) {
        return res.status(400).json({
          result: false,
          error: error.details[0].message
        });
    }
    // for (const post of data) {
    //     const { error, value } = postSchema.validate(post);
    //     if (error) {
    //       return res.status(400).json({
    //       result: false,
    //       error: error.details[0].message,
    //       post: post
    //     });
    //     }
    // }

    return res.status(200).json({
       result: true,
       post: data,
    });
})
.catch(err => {
      res.status(500).json({
        result: false,
        error: "API error"
      });
    });
});

router.get('/api/albums/:albumId/photos', function(req, res, next) {
  fetch(`https://jsonplaceholder.typicode.com/albums/${req.params.albumId}/photos`)
  .then(res => res.json())
  .then(data => {
    
    const { error, value } = photosArraySchema.validate(data);
    if (error) {
      return res.status(400).json({
      result: false,
      error: error.details[0].message
        });
    }

    return res.status(200).json({
       result: true,
       photos: data
    });
})
.catch(err => {
      res.status(500).json({
        result: false,
        error: "API error"
      });
    });
});

router.get('/api/todos', function(req, res, next) {
  fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then(res => res.json())
  .then(data => {
    
    const { error, value } = tachesArraySchema.validate(data);
    if (error) {
      return res.status(400).json({
      result: false,
      error: error.details[0].message
        });
    }
    const transformedTodos = data.map(todo => ({
      ...todo,
      status: todo.completed ? "Done" : "Pending"
    }));

    return res.status(200).json({
       result: true,
       todos: transformedTodos
    });
})
.catch(err => {
      res.status(500).json({
        result: false,
        error: "API error"
      });
    });
});

router.get('/api/posts/:postId/complex-comments', function(req, res, next) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.postId}/comments`)
  .then(res => res.json())
  .then(data => {
    
    const { error, value } = complexcommentsArraySchema.validate(data);
    if (error) {
      return res.status(400).json({
      result: false,
      error: error.details[0].message
        });
    }

    return res.status(200).json({
       result: true,
       post: data,
    });
})
.catch(err => {
      res.status(500).json({
        result: false,
        error: "API error"
      });
    });
});

module.exports = router 
