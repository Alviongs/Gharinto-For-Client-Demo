import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';
import { useAuth } from '../../App';

function CustomerFeedback() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('give-feedback');
  const [feedbackForm, setFeedbackForm] = useState({
    category: '',
    rating: 0,
    title: '',
    description: '',
    anonymous: false
  });
  const [reviewForm, setReviewForm] = useState({
    designerRating: 0,
    pmRating: 0,
    overallRating: 0,
    designQuality: 0,
    communication: 0,
    timeliness: 0,
    valueForMoney: 0,
    recommendation: '',
    comments: '',
    wouldRecommend: true
  });

  const customerName = user?.name || 'Sharma Family';
  const project = SAMPLE_DATA.projects.find(p => p.customerName === customerName);

  // Mock feedback history
  const feedbackHistory = [
    {
      id: 'FB001',
      category: 'Design Quality',
      rating: 5,
      title: 'Excellent 3D Visualization',
      description: 'The 3D designs were incredibly detailed and helped us visualize our dream home perfectly.',
      date: '2024-02-15',
      status: 'Resolved',
      response: 'Thank you for the positive feedback! We are glad you loved the 3D designs.',
      anonymous: false
    },
    {
      id: 'FB002',
      category: 'Communication',
      rating: 4,
      title: 'Good Communication Overall',
      description: 'The team was responsive, though sometimes there were delays in getting back to us.',
      date: '2024-02-20',
      status: 'Acknowledged',
      response: 'We appreciate your feedback and are working on improving our response times.',
      anonymous: false
    },
    {
      id: 'FB003',
      category: 'Material Quality',
      rating: 5,
      title: 'Premium Materials Used',
      description: 'Very satisfied with the quality of materials used in our project.',
      date: '2024-02-25',
      status: 'Resolved',
      response: 'Thank you! We always ensure premium quality materials for our projects.',
      anonymous: false
    }
  ];

  // Mock reviews given
  const reviewsGiven = [
    {
      id: 'REV001',
      type: 'Designer Review',
      target: 'Priya Mehta',
      rating: 5,
      date: '2024-03-01',
      comment: 'Exceptional designer with great attention to detail and creativity.',
      published: true
    },
    {
      id: 'REV002',
      type: 'Project Review',
      target: 'Overall Project Experience',
      rating: 4.5,
      date: '2024-03-01',
      comment: 'Great experience overall. Professional team and quality work.',
      published: true
    }
  ];

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted successfully! Our team will review and respond within 24 hours.');
    setFeedbackForm({
      category: '',
      rating: 0,
      title: '',
      description: '',
      anonymous: false
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert('Review submitted successfully! Thank you for your valuable feedback.');
    setReviewForm({
      designerRating: 0,
      pmRating: 0,
      overallRating: 0,
      designQuality: 0,
      communication: 0,
      timeliness: 0,
      valueForMoney: 0,
      recommendation: '',
      comments: '',
      wouldRecommend: true
    });
  };

  const renderStarRating = (rating, setRating, size = 'text-xl') => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`${size} ${
              star <= rating ? 'text-yellow-500' : 'text-gray-300'
            } hover:text-yellow-400 transition-colors`}
          >
            <i className="fas fa-star"></i>
          </button>
        ))}
      </div>
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved': return 'bg-green-200 text-green-800';
      case 'Acknowledged': return 'bg-blue-200 text-blue-800';
      case 'Pending': return 'bg-yellow-200 text-yellow-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  if (!project) {
    return (
      <div className="customer-feedback">
        <h2 className="text-3xl font-bold mb-6">Feedback & Reviews</h2>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <i className="fas fa-star text-6xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Active Project</h3>
          <p className="text-gray-500">You need an active project to provide feedback and reviews.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="customer-feedback">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Feedback & Reviews Center</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-download mr-2"></i>Export Feedback
          </button>
        </div>
      </div>

      {/* Feedback Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Feedback</h4>
              <p className="text-3xl font-bold text-blue-600">{feedbackHistory.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <i className="fas fa-comment text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Avg Rating Given</h4>
              <p className="text-3xl font-bold text-green-600">
                {feedbackHistory.length > 0 ? 
                  (feedbackHistory.reduce((sum, f) => sum + f.rating, 0) / feedbackHistory.length).toFixed(1) : 
                  '0'
                }
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <i className="fas fa-star text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Reviews Given</h4>
              <p className="text-3xl font-bold text-purple-600">{reviewsGiven.length}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <i className="fas fa-thumbs-up text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Response Rate</h4>
              <p className="text-3xl font-bold text-orange-600">
                {feedbackHistory.length > 0 ? 
                  Math.round((feedbackHistory.filter(f => f.response).length / feedbackHistory.length) * 100) : 
                  0
                }%
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <i className="fas fa-reply text-orange-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('give-feedback')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'give-feedback'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <i className="fas fa-comment mr-2"></i>Give Feedback
            </button>
            <button
              onClick={() => setActiveTab('write-review')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'write-review'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <i className="fas fa-star mr-2"></i>Write Review
            </button>
            <button
              onClick={() => setActiveTab('feedback-history')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'feedback-history'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <i className="fas fa-history mr-2"></i>Feedback History
            </button>
            <button
              onClick={() => setActiveTab('my-reviews')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'my-reviews'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <i className="fas fa-thumbs-up mr-2"></i>My Reviews
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Give Feedback Tab */}
          {activeTab === 'give-feedback' && (
            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Share Your Feedback</h3>
                <p className="text-gray-600 mb-6">Help us improve by sharing your experience and suggestions.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Feedback Category</label>
                  <select
                    value={feedbackForm.category}
                    onChange={(e) => setFeedbackForm({...feedbackForm, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Design Quality">Design Quality</option>
                    <option value="Communication">Communication</option>
                    <option value="Material Quality">Material Quality</option>
                    <option value="Timeline">Timeline</option>
                    <option value="Pricing">Pricing</option>
                    <option value="Customer Service">Customer Service</option>
                    <option value="Overall Experience">Overall Experience</option>
                    <option value="Suggestion">Suggestion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Overall Rating</label>
                  {renderStarRating(feedbackForm.rating, (rating) => setFeedbackForm({...feedbackForm, rating}))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Feedback Title</label>
                <input
                  type="text"
                  value={feedbackForm.title}
                  onChange={(e) => setFeedbackForm({...feedbackForm, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief title for your feedback"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Feedback</label>
                <textarea
                  value={feedbackForm.description}
                  onChange={(e) => setFeedbackForm({...feedbackForm, description: e.target.value})}
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please provide detailed feedback..."
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={feedbackForm.anonymous}
                  onChange={(e) => setFeedbackForm({...feedbackForm, anonymous: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                  Submit feedback anonymously
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg"
              >
                <i className="fas fa-paper-plane mr-2"></i>Submit Feedback
              </button>
            </form>
          )}

          {/* Write Review Tab */}
          {activeTab === 'write-review' && (
            <form onSubmit={handleReviewSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Write a Comprehensive Review</h3>
                <p className="text-gray-600 mb-6">Rate different aspects of your project experience.</p>
              </div>

              {/* Team Ratings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Rate Your Designer</h4>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">Priya Mehta</span>
                    {renderStarRating(reviewForm.designerRating, (rating) => setReviewForm({...reviewForm, designerRating: rating}))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Rate Your Project Manager</h4>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">{project.pmName}</span>
                    {renderStarRating(reviewForm.pmRating, (rating) => setReviewForm({...reviewForm, pmRating: rating}))}
                  </div>
                </div>
              </div>

              {/* Aspect Ratings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Design Quality</label>
                  {renderStarRating(reviewForm.designQuality, (rating) => setReviewForm({...reviewForm, designQuality: rating}))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Communication</label>
                  {renderStarRating(reviewForm.communication, (rating) => setReviewForm({...reviewForm, communication: rating}))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeliness</label>
                  {renderStarRating(reviewForm.timeliness, (rating) => setReviewForm({...reviewForm, timeliness: rating}))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Value for Money</label>
                  {renderStarRating(reviewForm.valueForMoney, (rating) => setReviewForm({...reviewForm, valueForMoney: rating}))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Overall Rating</label>
                {renderStarRating(reviewForm.overallRating, (rating) => setReviewForm({...reviewForm, overallRating: rating}), 'text-2xl')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Would you recommend Gharinto?</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={reviewForm.wouldRecommend === true}
                      onChange={() => setReviewForm({...reviewForm, wouldRecommend: true})}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes, definitely</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={reviewForm.wouldRecommend === false}
                      onChange={() => setReviewForm({...reviewForm, wouldRecommend: false})}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Comments</label>
                <textarea
                  value={reviewForm.comments}
                  onChange={(e) => setReviewForm({...reviewForm, comments: e.target.value})}
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Share your detailed experience..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg"
              >
                <i className="fas fa-star mr-2"></i>Submit Review
              </button>
            </form>
          )}

          {/* Feedback History Tab */}
          {activeTab === 'feedback-history' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Your Feedback History</h3>
              
              <div className="space-y-4">
                {feedbackHistory.map(feedback => (
                  <div key={feedback.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{feedback.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{feedback.category}</span>
                          <span>•</span>
                          <span>{new Date(feedback.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className={`fas fa-star text-sm ${i < feedback.rating ? 'text-yellow-500' : 'text-gray-300'}`}></i>
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(feedback.status)}`}>
                        {feedback.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{feedback.description}</p>
                    
                    {feedback.response && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h5 className="font-medium text-blue-800 mb-2">Team Response:</h5>
                        <p className="text-blue-700 text-sm">{feedback.response}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My Reviews Tab */}
          {activeTab === 'my-reviews' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Reviews You've Given</h3>
              
              <div className="space-y-4">
                {reviewsGiven.map(review => (
                  <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{review.type}</h4>
                        <p className="text-gray-600">{review.target}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className={`fas fa-star text-sm ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}></i>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({review.rating}/5)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                        {review.published && (
                          <div className="mt-1">
                            <span className="bg-green-200 text-green-800 px-2 py-1 text-xs rounded-full">Published</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerFeedback;