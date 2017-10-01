/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  new: function(request, response, next) {
    Customer.findOne(request.param('owner'), function foundCustomer(error, customer) {

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

  create: function(request, response, next) {
   Stock.create(request.params.all(), function stockCreated(error, stock) {

     // error
     if(error) return next(error);

     response.json(stock);

   });
  }

};

