require 'pry'

class UsersController < ApplicationController
    def index 
        users = User.all
        render json: users.to_json(:include => {
            :goals => {:only => [:id, :name, :price, :paid, :completed, :user_id]}
        }, :except => [:created_at, :updated_at])
    end
 
    def show 
        user = User.find_by(id: params[:id])
        render json: user.to_json(:include => {
            :goals => {:only => [:id, :name, :price, :paid, :completed, :user_id]}
        }, :except => [:created_at, :updated_at])
    end

    def create
        user = User.create(user_params)
        if user.save 
            render json: user, except: [:created_at, :updated_at]
        else 
            render json: { message: 'User Creation Failure'}
        end
        # binding.pry
    end

    def update 
        user = User.find(params[:id])
        if user 
            user.update(user_params)
            user.save
        end
        render json: user
        # binding.pry
    end


    private 

    def user_params
        params.require(:user).permit(:username, :balance)
    end
end
