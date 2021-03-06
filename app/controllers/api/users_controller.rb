class Api::UsersController < ApplicationController 

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            Portfolio.create(user_id: @user.id)
            Watchlist.create(user_id: @user.id)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
        
        
    end

    def show
        @user = User.find(params[:id])
        
        if @user
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private 
    def user_params
        params.require(:user).permit(:username, :password, :fname, :lname, :email)
    end
end
