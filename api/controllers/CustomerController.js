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

      // customize undefined state for the view
      customer.state = customer.state != undefined ? customer.state : '';

      // return view with customer
      response.view({
        customer: customer
      });

    });
  },

  index: function(request, response, next) {
    Customer.find(function foundCustomers(error, customers) {

      // error
      if(error) return next(error);

      response.view({
        customers: customers
      });

    });
  },

  edit: function(request, response, next) {
    Customer.findOne(request.param('id'), function customerCreated(error, customer) {

      // error
      if(error) return next(error);

      // no customer
      if(!customer) return next();

      // customize undefined state for the view
      customer.state = customer.state != undefined ? customer.state : '';

      // return view with customer
      response.view({
        customer: customer
      });

    });
  },

  update: function(request, response, next) {
    Customer.update(request.param('id'), request.params.all(), function customerUpdate(error) {

      // error
      if(error) return response.redirect('/customer/edit/' + request.param('id'));

      response.redirect('/customer/show/' + request.param('id'));

    });
  },

  destroy: function(request, response, next) {
    Customer.destroy(request.param('id')).exec(function customerDestroyed() {
      response.redirect('/customer/');
    });
  }

};

