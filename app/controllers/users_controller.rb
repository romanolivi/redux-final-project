require 'pry'

class UsersController < ApplicationController
    def index 
        users = User.all
        render json: users.to_json(:include => {
            :goals => {:only => [:name, :price]}
        }, :except => [:created_at, :updated_at])
    end
 
    def show 
        user = User.find_by(id: params[:id])
        render json: user.to_json(:include => {
            :goals => {:only => [:name, :price]}
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
            goal = Goal.find_or_create_by(:goal => params[:_json], :user_id => params[:id])
        end
        render json: goal
    end

    def destroy 
        user = User.find(params[:id])
        if user 
            Goal.delete(user.goals.find{|img| img.image == params[:_json] }.id)
        end
        render json: goal
    end

    private 

    def user_params
        params.require(:user).permit(:username, :balance)
    end
end
