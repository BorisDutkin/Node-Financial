/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  new: function(request, response) {
    response.view()
  },

  create: function(request, response, next) {
    Customer.create(request.params.all(), function customerCreated(error, customer) {

      // error
      if(error) return next(error);

      // redirect to show page
      response.redirect('/customer/show/' + customer.id);

    });
  },

  show: function(request, response, next) {
    Customer.findOne(request.param('id'), function customerCreated(error, customer) {

      // error
      if(error) return next(error);

      // no customer
      if(!customer) return next();

      // return view with customer
      response.view({
        customer: customer
      });

    });
  },

};

