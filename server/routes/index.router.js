const express = require('express');
const router = express.Router();

const ctrlUser = require('../Controller/user.controller');
const ctrlUserProfile = require('../Controller/profile.controller');
const ctrlPost = require('../Controller/post.controller');
const ctrlBid = require('../Controller/bid.controller');
const ctrlSpam = require('../Controller/spam.controller');
const jwtHelper = require('../config/jwtHelper');
const ctrlReview = require('../Controller/review.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.post('/makebid', ctrlBid.makebid);
router.post('/reportspam', ctrlSpam.SubmitSpamReport);
router.get('/getbidbypostid/:post_id', ctrlBid.getBidByPostId);
router.get('/getbidbyemail/:email', ctrlBid.getBidByUser);
router.post('/makeProfile', ctrlUserProfile.makeProfile);
router.get('/getprofilebyemail/:emailAddress', ctrlUserProfile.getProfileByEmail);
router.get('/getspamreports', ctrlSpam.retrieveSpamReports);
router.post('/makePost', ctrlPost.makePost);
router.get('/postlist',ctrlPost.retrievePost);
router.get('/getpostbyid/:id',ctrlPost.getPostById);
router.get('/getpostbyuser/:user',ctrlPost.getPostByUser);
router.get('/getPostByName/:user',ctrlPost.getPostByName);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.put('/updatepostbyid/:id',ctrlPost.updatePostById);
router.put('/updateprofilebyid/:id',ctrlUserProfile.updateProfileById);
router.delete('/deletebyid/:id',ctrlPost.deletePostById);
router.delete('/deletespambyemail/:user',ctrlSpam.deleteSpambyemail);
router.delete('/deletebyemail/:email',ctrlUser.deleteUserByEmail);
router.delete('/deleteprofilebyemail/:email',ctrlUserProfile.deleteProfilebyemail);
router.delete('/deletebidbyid/:id',ctrlBid.deleteBidById);
router.put('/updatebidbyid/:id',ctrlBid.updateBidById);
router.post('/makereview', ctrlReview.makeReview);


router.get('/reviews/:user', ctrlReview.retrieveReviews);



router.delete('/deletereviewbyid/:id',ctrlReview.deleteReviewById);
module.exports = router;