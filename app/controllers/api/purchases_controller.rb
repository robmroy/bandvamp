class Api::PurchasesController < ApplicationController
    def create
        purchase = Purchase.new(purchase_params)
        if purchase.save
            @user = User.find(purchase_params[:user_id])
            render 'api/users/show'
        else
            render json: purchase.errors.full_messages, status: 422
        end
    end

    private

    def purchase_params
        params.require(:purchase).permit(:album_id, :user_id)
    end
end
