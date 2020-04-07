<template>

<div class="container">
	<table id="cart" class="table table-hover table-condensed mt-5">
    				<thead>
						<tr>
							<th style="width:50%">Product</th>
							<th style="width:10%">Price</th>
							<th style="width:8%">Quantity</th>
							<th style="width:22%" class="text-center">Subtotal</th>
							<th style="width:10%"></th>
						</tr>
					</thead>
					<tbody> 
                         <CartItem
                            v-for="(item, index) in inCart"
                            :key="item.id"
                            :index="index"
                            :id="item.id"
                            :name="item.name"
                            :description="item.description"
                            :image="item.image"
                            :price="item.price"
                            :quantity="item.quantity" />   

					</tbody>
					<tfoot>
						<tr>
							<td colspan="3" class="hidden-xs"></td>
                            <td colspan="1" class="hidden-xs text-right">
                                <p>Total:</p>
                                <p>Tax:</p>
                            </td>

							<td colspan="1" class="hidden-xs text-right">      
                                <p><strong class="ml-5">${{getcartTotal.toFixed(2)}}</strong></p>  
                                <p><strong class="ml-5">${{(getcartTotal * 0.13).toFixed(2)}}</strong></p>            
                            </td>
						</tr>
                        <tr>
							<td colspan="3" class="hidden-xs"></td>
                            
                            <td colspan="1" class="hidden-xs text-right">
                                <p>Final Amount:</p>
                            </td>
							<td colspan="1" class="hidden-xs text-right"> 
                                <p><strong class="ml-5">${{((getcartTotal * 1.13)).toFixed(2)}}</strong></p>        
                            </td>
						</tr>
                        <tr>
                            <td><b-button to="/" class="btn pl-5 pr-5"><i class="fa fa-angle-left "></i> Continue Shopping</b-button>
                             
                            </td>
                            
							<td colspan="2" class="hidden-xs"></td>
							<td colspan="2" class="text-right">

                               
                                <b-button to = "/checkout" class="btn pl-5 pr-5" variant="success">Checkout <i class="fa fa-angle-right"></i></b-button>
                                
                            </td>
						</tr>
					</tfoot>
				</table>
</div>
</template>

<script>


import CartItem from './CartItem';
import { mapGetters } from 'vuex'; 

export default {
    name: 'Cart',
    data() {
        return {};
    },
    computed: {
    
        ...mapGetters([ 
      'getcartTotal',
    ]),
    
        forSale() { return this.$store.state.forSale; },
        inCart() { return this.$store.state.inCart; }
        
    },
     components:{
        CartItem,
    },
    created(){
    }

};

</script>

<style>

</style>