const postService = require('../services/posts.service');

exports.createPost = (req, res, next) => {
    const data = {
        description: req.body.description,
        imagePath: req.body.imagePath,
        addedByUserId: req.body.addedByUserId,
      };

    postService.createPost(data, (error, results) => {
        if(error){
            return res.status(400).send({status: 0, message: error});
        }
        return res.status(200).send({
            success: 1,
            data: results,
          });
    });
}

exports.allPosts = (req, res, next) => {
    data = {}

    postService.allPosts(data, (error, results) =>{
        if(error){
            return res.status(400).send({status: 0, message: error});
        }
        return res.status(200).send({
            success: 1,
            data: results
        })
    });
}

exports.addPostComment = (req, res, next) => {
    data =  {
        postId: req.body.postId,
        comment: req.body.comment,
        addedByUserId: req.body.addedByUserId,
    }

    postService.addPostComment(data, (error, results) =>{
        if(error){
            return res.status(400).send({status: 0, message: error});
        }
        return res.status(200).send({
            success: 1,
            data: results
        })
    });
}

exports.getPostAllComments = (req, res, next) => {
    data = {
        postId: req.query.postId,
    }

    postService.getPostAllComments(data, (error, results) =>{
        if(error){
            return res.status(400).send({status: 0, message: error});
        }
        return res.status(200).send({
            success: 1,
            data: results
        })
    });
}

exports.likePost = (req, res, next) =>{
    data = {
        postId: req.body.postId,
    }

    postService.likePost(data, (error, results) =>{
        if(error){
            return res.status(400).send({status: 0, message: error});
        }
        return res.status(200).send({
            success: 1,
            data: results
        })
    });
}

exports.dislikePost = (req, res, next) => {
    const data = {
      postId: req.body.postId,
    };
    postService.dislikePost(data, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).send({ success: 0, data: "Bad request" });
      }
      return res.status(200).send({
        success: 1,
        data: results,
      });
    });
  };

  exports.deletePost = (req, res, next) => {
      data = {
          postId: req.query.postId
      }

      postService.deletePost(data, (error, results) =>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: "Bad request" });
          }
          return res.status(200).send({
            success: 1,
            data: results,
          });
      });
  }